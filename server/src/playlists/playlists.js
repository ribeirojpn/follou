import request from 'request'
import checkFollower from './../lib/checkFollower'
import getFollowedPlaylists from './../lib/followedPlaylists'
import getLyrics from './../lib/getLyrics'
import { getUserDataFromToken } from './../auth/token'
import mongoose from 'mongoose'

let Controller = {}
const User = mongoose.model('User')

Controller.getPlaylists = function (req, res) {
  try {
    const token = req.headers.authorization.split('Bearer').pop().trim()
    let userData = getUserDataFromToken(token)
    const spotifyToken = req.headers.spotify.split('Spotify').pop().trim()
    request.get(`https://api.spotify.com/v1/me/playlists?limit=50`,
      {
        'auth': {
          'bearer': spotifyToken
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(error)
          res.status(500).send('Something failed! Check if you logged before try again.')
        }
        try {
          let playlists = JSON.parse(body).items.map(function (item) {
            let playlist = {
              id: item.id,
              url: item.external_urls.spotify,
              images: item.images,
              name: item.name,
              tracks: item.tracks,
              owner: {id: item.owner.id, name: item.owner.name}
            }
            return playlist
          })

          User.findByIdAndUpdate(userData._id, {$set: {playlists: playlists}}, {new: true}, function (erro, user) {
            if (erro) {
              console.log(erro)
              res.status(500).send('Something failed! Check if you logged before try again.')
            }
            let data = {
              // Profile esta aqui de forma temporaria, ideal que seja passado numa pagina inicial apos logado, como um dashboard
              profile: {
                id: user.spotifyId,
                name: user.name,
                email: user.email,
                img_url: user.photo
              },
              playlists
            }
            res.json(data)
          })
        } catch (erro) {
          res.status(401).json('Usuario não autenticado')
        }
      }
    )
  } catch (erro) {
    console.log(erro)
    res.status(500).send('Something failed! Check if you logged before try again.')
  }
}

Controller.getFollower = function (req, res) {
  try {
    let userData = getUserDataFromToken(req.cookies.authToken)
    let playlistCheckData = {
      user_id: userData.spotifyId,
      playlist_id: req.query.pl,
      follower_id: req.query.fl,
      token: req.cookies.spotifyToken
    }

    checkFollower(playlistCheckData, function (err, success) {
      if (err) res.status(404).send('playlist nao encontrada ou nao foi possivel acessar o spotify')
      res.json({'user': playlistCheckData.follower_id, 'playlist': playlistCheckData.playlist_id, 'isFollowing': success})
    })
  } catch (erro) {
    console.log(erro)
    res.status(500).send('Something failed! Check if you logged before try again.')
  }
}

Controller.getFollowedPlaylistsByUser = function (req, res) {
  try {
    let userData = getUserDataFromToken(req.cookies.authToken)
    let followerData = {
      user_id: userData.spotifyId,
      follower_id: req.query.fl,
      playlists: req.user.playlists,
      token: req.cookies.spotifyToken
    }

    getFollowedPlaylists(followerData, function (err, success) {
      if (err) res.status(404).send('playlist nao encontrada ou nao foi possivel acessar o spotify')
      res.json(success)
    })
  } catch (erro) {
    console.log(erro)
    res.status(500).send('Something failed! Check if you logged before try again.')
  }
}

Controller.getPlaylistById = function (req, res) {
  const token = req.headers.spotify.split('Spotify').pop().trim()
  let playlist
  let nextRequest

  request.get(`https://api.spotify.com/v1/users/${req.query.user}/playlists/${req.query.id}`,
    {
      'auth': {
        'bearer': token
      }
    },
    function (error, response, body) {
      if (error) {
        console.log(error)
        res.status(500).send('Something failed! Check if you logged before try again.')
      }
      try {
        let data = JSON.parse(body)
        playlist = {
          name: data.name,
          url: data.external_urls.spotify,
          owner: data.owner.id,
          owner_url: data.owner.external_urls.spotify,
          tracks: []
        }

        playlist.tracks = data.tracks.items.map(function (item) {
          let track = {
            id: item.track.id,
            name: item.track.name,
            url: item.track.external_urls.spotify,
            artists: item.track.artists
          }
          return track
        })

        nextRequest = data.tracks.next
        if (nextRequest) {
          getNextTracks(nextRequest, playlist.tracks, token, function (erro, success) {
            if (erro) {
              console.log(erro)
              res.status(500).send('Something failed! Check if you logged before try again.')
            }
            playlist.tracks = success
            getLyrics(playlist.tracks, function (erro, success) {
              if (erro) {
                console.log(erro)
                res.status(500).send('Something failed! Check if you logged before try again.')
              }
              playlist.tracks = success
              res.json(playlist)
            })
          })
        } else {
          getLyrics(playlist.tracks, function (erro, success) {
            if (erro) {
              console.log(erro)
              res.status(500).send('Something failed! Check if you logged before try again.')
            }
            playlist.tracks = success
            res.json(playlist)
          })
        }
      } catch (erro) {
        console.log(erro)
        res.status(500).send('Something failed! Check if you logged before try again.')
      }
    }
  )
}

function getNextTracks (nextRequest, tracks, token, callback) {
  request.get(nextRequest,
    {
      'auth': {
        'bearer': token
      }
    },
    function (error, response, body) {
      if (error) {
        console.log(error)
        callback(error, null)
      }
      try {
        let data = JSON.parse(body)
        tracks = tracks.concat(
          data.items.map(function (item) {
            let track = {
              id: item.track.id,
              name: item.track.name,
              url: item.track.external_urls.spotify,
              artists: item.track.artists
            }
            return track
          })
        )

        nextRequest = data.next
        if (nextRequest) {
          getNextTracks(nextRequest, tracks, token, callback)
        } else {
          callback(null, tracks)
        }
      } catch (erro) {
        callback(erro, null)
      }
    }
  )
}

export default Controller

import request from 'request'
import localStorage from 'localStorage'
import checkFollower from './../lib/checkFollower'
import getFollowedPlaylists from './../lib/followedPlaylists'
import getLyrics from './../lib/getLyrics'
import mongoose from 'mongoose'

let Controller = {}
const User = mongoose.model('User')

Controller.getPlaylists = function (req, res) {
  try {
    let token = localStorage.getItem('accessToken')
    request.get(`https://api.spotify.com/v1/me/playlists`,
      {
        'auth': {
          'bearer': token
        }
      },
      function (error, response, body) {
        if (error) throw new Error()
        let playlists = JSON.parse(body).items.map(function (item) {
          let playlist = {
            id: item.id,
            url: item.external_urls.spotify,
            images: item.images,
            name: item.name,
            tracks: item.tracks
          }
          return playlist
        })

        User.findByIdAndUpdate(req.user._id, {$set: {playlists: playlists}}, {new: true}, function (erro, user) {
          if (erro) throw new Error()
          res.send(playlists)
        })
      }
    )
  } catch (erro) {
    console.log(erro)
    res.status(500).send('Something failed! Check if you logged before try again.')
  }
}

Controller.getFollower = function (req, res) {
  let playlistCheckData = {
    user_id: req.user.spotifyId,
    playlist_id: req.query.pl,
    follower_id: req.query.fl,
    token: localStorage.getItem('accessToken')
  }

  checkFollower(playlistCheckData, function (err, success) {
    if (err) throw new Error('playlist nao encontrada ou nao foi possivel acessar o spotify')
    res.send({'user': playlistCheckData.follower_id, 'playlist': playlistCheckData.playlist_id, 'isFollowing': success})
  })
}

Controller.getFollowedPlaylistsByUser = function (req, res) {
  let followerData = {
    user_id: req.user.spotifyId,
    follower_id: req.query.fl,
    playlists: req.user.playlists,
    token: localStorage.getItem('accessToken')
  }

  getFollowedPlaylists(followerData, function (err, success) {
    if (err) throw new Error()
    res.send(success)
  })
}

Controller.getPlaylistById = function (req, res) {
  let token = localStorage.getItem('accessToken')
  request.get(`https://api.spotify.com/v1/users/${req.query.user}/playlists/${req.query.id}/tracks?limit=100`,
    {
      'auth': {
        'bearer': token
      }
    },
    function (error, response, body) {
      if (error) throw new Error()
      try {
        let tracks = JSON.parse(body).items.map(function (item) {
          let track = {
            id: item.track.id,
            name: item.track.name,
            url: item.track.external_urls.spotify,
            artists: item.track.artists
          }
          return track
        })

        getLyrics(tracks, function (erro, success) {
          if (erro) throw new Error()
          res.send(success)
        })
      } catch (erro) {
        console.log(erro)
        res.status(500).send('Something failed! Check if you logged before try again.')
      }
    }
  )
}

export default Controller

import playlists from './playlists'
import { verifyToken } from './../auth/token'

export default function (app) {
  app.get('/api/user/playlists', checkToken, playlists.getPlaylists)
  app.get('/api/user/playlists/following', checkToken, playlists.getFollower)
  app.get('/api/user/playlists/followed', checkToken, playlists.getFollowedPlaylistsByUser)

  app.get('/api/playlists', checkToken, playlists.getPlaylistById)
}

function checkToken (req, res, next) {
  try {
    const token = req.headers.authorization.split('Bearer').pop().trim()
    const spotifyToken = req.headers.spotify.split('Spotify').pop().trim()
    if (spotifyToken && verifyToken(token)) {
      return next()
    } else {
      res.status('401').send('Nao autorizado')
    }
  } catch (erro) {
    res.status('401').send('Nao autorizado')
  }
}

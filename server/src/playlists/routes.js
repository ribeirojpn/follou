import playlists from './playlists'
import { verifyToken } from './../auth/token'

export default function (app) {
  app.get('/api/user/playlists', checkToken, playlists.getPlaylists)
  app.get('/api/user/playlists/following', checkToken, playlists.getFollower)
  app.get('/api/user/playlists/followed', checkToken, playlists.getFollowedPlaylistsByUser)

  app.get('/api/playlists', checkToken, playlists.getPlaylistById)
}

function checkToken (req, res, next) {
  if (req.cookies.spotifyToken && verifyToken(req.cookies.authToken)) {
    return next()
  } else {
    setTimeout(function () {
      res.status('401').redirect('/')
    })
  }
}

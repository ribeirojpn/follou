import playlists from './playlists'
import localStorage from 'localStorage'

export default function (app) {
  app.get('/api/user/playlists', checkToken, playlists.getPlaylists)
  app.get('/api/user/playlists/following', checkToken, playlists.getFollower)
  app.get('/api/user/playlists/followed', checkToken, playlists.getFollowedPlaylistsByUser)

  app.get('/api/playlists', checkToken, playlists.getPlaylistById)
}

function checkToken (req, res, next) {
  if (localStorage.getItem('accessToken')) {
    return next()
  } else {
    res.status('401').json('Não autorizado')
  }
}

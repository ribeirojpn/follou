import playlists from './playlists'

export default function (app) {
  app.get('/user/playlists', playlists.getPlaylists)
  app.get('/user/playlists/following', playlists.getFollower)
  app.get('/user/playlists/followed', playlists.getFollowedPlaylistsByUser)

  app.get('/playlists', playlists.getPlaylistById)
}

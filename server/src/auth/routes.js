import passport from 'passport'

export default function (app) {
  app.get('/auth/spotify', passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private', 'playlist-read-private', 'playlist-read-collaborative', 'user-follow-read']
  }))
  app.get('/auth/spotify/callback', passport.authenticate('spotify', { successRedirect: '/api/user/playlists', failureRedirect: '/login' }))

  app.get('/logout', function (req, res) {
    req.logOut()
    res.redirect('/')
  })
}

import passport from 'passport'
import { setTokenCookie, removeTokens } from './token'

export default function (app) {
  app.get('/auth/spotify', passport.authenticate('spotify', {
    session: false,
    scope: ['user-read-email', 'user-read-private', 'playlist-read-private', 'playlist-read-collaborative', 'user-follow-read']
  }))
  app.get('/auth/spotify/callback', passport.authenticate('spotify', {
    session: false,
    failureRedirect: '/login'
  }), setTokenCookie)

  app.get('/logout', removeTokens)
}

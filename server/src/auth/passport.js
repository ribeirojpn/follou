require('dotenv').config()
import passport from 'passport'
import PassportSpotify from 'passport-spotify'
import mongoose from 'mongoose'
import userModel from './../user/model'
let localStorage = require('localStorage')



const SpotifyStrategy = PassportSpotify.Strategy

userModel()

export default function () {
  const User = mongoose.model('User')

  passport.use(new SpotifyStrategy({
    clientID: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/spotify/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    localStorage.setItem('accessToken', accessToken);
    User.findOrCreate({ spotifyId: profile.id }, {name: profile.displayName, photo: profile.photos[0], email: profile._json.email}, function (err, user) {
      return done(err, user)
    })
  }))

  passport.serializeUser(function (user,done) {
    done(null,user._id)
  })

  passport.deserializeUser(function (id,done) {
    User.findById(id).exec().then(function (user) {
      done(null,user)
    })
  })
}

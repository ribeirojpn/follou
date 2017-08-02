require('dotenv').config()
import jwt from 'jsonwebtoken'

export function setTokenCookie (req, res) {
  if (!req.user) return res.json(404, {message: 'Problem with auth!'})
  let spotifyToken = req.user.spotifyToken
  let authToken = jwt.sign({_id: req.user._id, spotifyId: req.user.spotifyId}, process.env.APP_SECRET, {expiresIn: '7d'})
  res.cookie('spotifyToken', spotifyToken)
  res.cookie('authToken', authToken)
  res.redirect('/api/user/playlists')
}

export function verifyToken (token, callback) {
  if (callback) {
    jwt.verify(token, process.env.APP_SECRET, callback)
  } else {
    return jwt.verify(token, process.env.APP_SECRET)
  }
}

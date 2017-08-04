require('dotenv').config()
import jwt from 'jsonwebtoken'

export function setTokenCookie (req, res) {
  if (!req.user) return res.json(404, {message: 'Problem with auth!'})
  let spotifyToken = req.user.spotifyToken
  let authToken = jwt.sign({_id: req.user._id, spotifyId: req.user.spotifyId}, process.env.APP_SECRET, {expiresIn: '7d'})
  res.redirect(`http://localhost:3000/?token=${authToken}&spotifytoken=${spotifyToken}`)
}

export function verifyToken (token, callback) {
  if (callback) {
    jwt.verify(token, process.env.APP_SECRET, callback)
  } else {
    return jwt.verify(token, process.env.APP_SECRET)
  }
}

// precisa pegar, name, email and photo
export function getUserDataFromToken (authToken) {
  let userData = {}
  verifyToken(authToken, function (err, decoded) {
    if (err) throw new Error('Usuario não autenticado')
    userData._id = decoded._id
    userData.spotifyId = decoded.spotifyId
  })

  return userData
}

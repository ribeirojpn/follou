import dotenv from 'dotenv'
import 'newrelic'
import database from './src/config/database'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import bodyParser from 'body-parser'

import passportConfig from './src/auth/passport'
import authRoutes from './src/auth/routes'
import playlistsRoutes from './src/playlists/routes'
import tracksRoutes from './src/tracks/routes'

dotenv.config()
database(process.env.MONGODB_URI || 'mongodb://localhost/plfollowers')

const app = express()

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
}

app.set('port', process.env.PORT || 3000)
app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())

authRoutes(app)
playlistsRoutes(app)
tracksRoutes(app)
passportConfig()

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

export default app

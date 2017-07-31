require('dotenv').config()
import database from './src/main/database'
database(process.env.MONGOLAB_URI || 'mongodb://localhost/plfollowers')

import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'
import bodyParser from 'body-parser'

import passportConfig from './src/auth/passport'
import appRoutes from './src/main/routes'
import authRoutes from './src/auth/routes'
import playlistsRoutes from './src/playlists/routes'

const app = express()

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

app.set('port', process.env.PORT || 3000)
app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session(
  {
    secret: process.env.APP_SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }
))
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)
appRoutes(app)
playlistsRoutes(app)
passportConfig()

export default app

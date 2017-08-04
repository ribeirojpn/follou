import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import Playlists from './components/Playlists'
import Logout from './components/Logout'
import NotFound from './components/NotFound'
import PlaylistWithLyrics from './components/PlaylistWithLyrics'

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/playlists" component={Playlists} />
      <Route path="/playlist" component={PlaylistWithLyrics} />
      <Route path="/logout" component={Logout} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)

export default Routes

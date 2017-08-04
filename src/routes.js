import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import Playlists from './components/Playlists'

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/playlists" component={Playlists} />
    </Switch>
  </Router>
)

export default Routes

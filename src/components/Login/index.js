import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor (props) {
    super(props)
    const search = this.props.location.search
    const params = new URLSearchParams(search)

    if ((params.get('token') && params.get('spotifytoken'))) {
      localStorage.setItem('access_token', params.get('token'))
      localStorage.setItem('spotify_token', params.get('spotifytoken'))
      this.state = { loggedIn: true }
    } else {
      this.state = { loggedIn: false }
    }
  }

  render () {
    let redirectLink = { pathname: '/' }
    if (this.state.loggedIn) {
      redirectLink.pathname = '/playlists'
    }
    return (<Redirect to={redirectLink} />)
  }
}

export default Login

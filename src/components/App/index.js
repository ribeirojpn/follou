import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Footer from './../Footer'
import './style.css'

class App extends Component {
  constructor (props) {
    super(props)
    const search = this.props.location.search
    const params = new URLSearchParams(search)

    if ((params.get('token') && params.get('spotifytoken')) || localStorage.getItem('access_token')) {
      if (params.get('token') && params.get('spotifytoken')) {
        localStorage.setItem('access_token', params.get('token'))
        localStorage.setItem('spotify_token', params.get('spotifytoken'))
      }
      this.state = {logged: true}
    } else {
      this.state = {logged: false}
    }
  }

  render () {
    let playlistsLink = { pathname: '/playlists' }
    if (this.state.logged) {
      return (<Redirect to={playlistsLink} />)
    }
    return (
      <div>
        <div className="index">
          <div className="container">
            <div className="box-auth">
              <h1 className="text-center follou-logo">Follou</h1>
              <h3 className="text-center">Descubra quais das suas playlists outros usuarios seguem</h3>
              <div className="auth-buttons">
                <p className="text-center">
                  Conecte-se com sua conta do spotify, para que possamos encontrar suas playlists
                </p>
                <a className="btn btn-default btn-social btn-spotify btn-block" href='/auth/spotify'>
                  <i className="fa fa-spotify"></i>
                  Sign in with <b>Spotify</b>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App

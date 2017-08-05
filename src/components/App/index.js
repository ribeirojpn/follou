import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Footer from './../Footer'
import './style.css'

class App extends Component {
  constructor (props) {
    super(props)
    if (localStorage.getItem('access_token')) {
      this.state = {loggedIn: true}
    } else {
      this.state = {loggedIn: false}
    }
  }

  render () {
    let playlistsLink = { pathname: '/playlists' }
    if (this.state.loggedIn) {
      return (<Redirect to={playlistsLink} />)
    }
    return (
      <div>
        <div className="index">
          <div className="container">
            <div className="box-auth">
              <h1 className="text-center follou-logo">Follou</h1>
              <h3 className="text-center">Facilitando sua vida...<br/>
               <strike>Pelo menos na hora de cantar junto com a musica</strike></h3>
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

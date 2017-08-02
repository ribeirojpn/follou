import React, { Component } from 'react'
import classnames from 'classnames'
import './style.css'

class App extends Component {
  render () {
    const { className, ...props } = this.props
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="container">
          <div className="box-auth">
            <h1 className="text-center follou-logo">Follou</h1>
            <h3 className="text-center">Descubra quais das suas playlists outros usuarios seguem</h3>
            <div className="auth-buttons">
              <p className="text-center">
                Conecte-se com sua conta do spotify, para que possamos encontrar suas playlists
              </p>
              <a className="btn btn-default btn-social btn-spotify btn-block" href="/auth/spotify">
                <i className="fa fa-spotify"></i>
                Sign in with <b>Spotify</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

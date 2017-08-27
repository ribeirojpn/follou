import React, { Component } from 'react'
import './style.css'
import NavBar from './../NavBar'

class NotFound extends Component {
  render () {
    return (
      <div className='not-found text-center'>
        <NavBar notFound />
        <div className='container'>
          <h1>
          404 <small>Not Found :(</small>
          </h1>
          <div className='row'>
            <div className='col-md-6 col-md-offset-3'>
              <h2>
                "Lost<br />
                &nbsp;Lost in the heat of it all<br />
                &nbsp;... you know you're lost<br />
                &nbsp;Lost in the thrill of it all..."
              </h2>
              <p><strong>Lost, by Frank Ocean</strong></p>
              <p>
                <a href='https://open.spotify.com/track/4L7jMAP8UcIe309yQmkdcO'>Musica no Spotify</a>
                &emsp;&emsp;&emsp;
                <a href='https://genius.com/Frank-ocean-lost-lyrics'>Letra no Genius</a>
              </p>
            </div>
          </div>
          <h3><a href='/playlists'>Voltar</a></h3>
        </div>
      </div>
    )
  }
}

export default NotFound

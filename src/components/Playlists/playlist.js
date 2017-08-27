import React, { Component } from 'react'
import './style.css'

class Playlist extends Component {
  render () {
    const playlist = this.props.playlistData
    let imgUrl = require('./images/playlist.png')
    if (playlist.images.length > 0) {
      imgUrl = playlist.images[0].url
    }
    return (
      <div className='playlist'>
        <div className='box'>
          <a href={`/playlist?id=${playlist.id}&user=${playlist.owner.id}`}>
            <img src={imgUrl} className='img-responsive' alt='playlist' />
            <div className='title'><p>{playlist.name}</p></div>
          </a>
        </div>
      </div>
    )
  }
}

export default Playlist

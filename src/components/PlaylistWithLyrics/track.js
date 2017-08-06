import React, { Component } from 'react'
import './style.css'

class Track extends Component {
  render () {
    let track = this.props.track
    let lyricUrl = <a href={track.lyric_url}>Letra no Genius</a>
    if (track.lyric_url === 'lyric-not-found') {
      lyricUrl = <p>Letra não encontrada :(</p>
    }

    return (
      <li>
        <div className="row track-item">
          <div className="col-sm-4 col-xs-6 text-left">
            <p>{track.name}</p>
          </div>
          <div className="col-sm-4 artist-name text-left">
            <p>{track.artists[0].name}</p>
          </div>
          <div className="col-sm-4 col-xs-6 text-right">
            {lyricUrl}
          </div>
        </div>
      </li>
    )
  }
}

export default Track

import React, { Component } from 'react'
import axios from 'axios'

class PlaylistWithLyrics extends Component {
  constructor (props) {
    super(props)
    const search = this.props.location.search
    const params = new URLSearchParams(search)

    this.state = {
      searchUser: params.get('user'),
      searchId: params.get('id'),
      playlist: { tracks: [] }}
    this.getPlaylist = this.getPlaylist.bind(this)
  }

  getPlaylist () {
    axios.get(`/api/playlists?id=${this.state.searchId}&user=${this.state.searchUser}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Spotify': `Spotify ${localStorage.getItem('spotify_token')}`
      }
    }).then((response) => {
      this.setState({ playlist: response.data })
    }).catch((erro) => {
      console.log(erro)
    })
  }

  componentDidMount() {
    this.getPlaylist()
  }

  render () {
    // colocar um loader para mostrar para o usuario enquanto a playlist é carregada
    const playlistTracks = this.state.playlist.tracks.map((track) => {
      if (track.lyric_url === 'lyric-not-found') {
        return <li>{track.name} - {track.artists[0].name} - Lyric not found :(</li>
      }
      return <li>{track.name} - {track.artists[0].name} - <a href={track.lyric_url} target="_blank">Lyric on Genius</a></li>
      }
    )
    return (
      <div className="lyrics">
        <div className="container">
          <h1>{this.state.playlist.name}</h1>
          <ul className="list-unstyled">{playlistTracks}</ul>
        </div>
      </div>
    )
  }
}

export default PlaylistWithLyrics

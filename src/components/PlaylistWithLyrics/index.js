import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import NavBar from './../NavBar'
import Track from './track'

class PlaylistWithLyrics extends Component {
  constructor (props) {
    super(props)
    const search = this.props.location.search
    const params = new URLSearchParams(search)

    this.state = {
      searchUser: params.get('user'),
      searchId: params.get('id'),
      playlist: { tracks: [] },
      isConnected: true
    }
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
      this.setState({isConnected: false})
    })
  }

  componentDidMount() {
    this.getPlaylist()
  }

  render () {
    // colocar um loader para mostrar para o usuario enquanto a playlist é carregada
    let tracksSorted = this.state.playlist.tracks.sort(function (a,b) {
      let trackA = a.name.toUpperCase();
      let trackB = b.name.toUpperCase();
      if (trackA < trackB) {
        return -1;
      }
      if (trackA > trackB) {
        return 1;
      }

      return 0;
    })

    if (!this.state.isConnected) {
      let logout = { pathname: '/logout' }
      return (<Redirect to={logout} />)
    }

    const playlistTracks = tracksSorted.map((track) => {
      return <Track track={track}/>
    })

    return (
      <div className="lyrics">
        <NavBar isConnected={true}/>
        <div className="content">
          <div className="container">
            <h1 className="text-center">{this.state.playlist.name}</h1>
            <ul className="list-unstyled">{playlistTracks}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistWithLyrics

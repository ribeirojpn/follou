import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import NavBar from './../NavBar'
import Track from './track'
import Loader from 'react-loader'
import spinerConfig from './spinerConfig'

class PlaylistWithLyrics extends Component {
  constructor (props) {
    super(props)
    const search = this.props.location.search
    const params = new URLSearchParams(search)

    this.state = {
      searchUser: params.get('user'),
      searchId: params.get('id'),
      playlist: { tracks: [] },
      isConnected: true,
      loaded: false
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
      this.setState({ playlist: response.data, loaded: true })
    }).catch((erro) => {
      this.setState({isConnected: false})
    })
  }

  componentDidMount () {
    this.getPlaylist()
  }

  render () {
    // add spinner loader
    // colocar um loader para mostrar para o usuario enquanto a playlist é carregada
    let tracksSorted = this.state.playlist.tracks.sort(function (a, b) {
      let trackA = a.name.toUpperCase()
      let trackB = b.name.toUpperCase()
      if (trackA < trackB) {
        return -1
      }
      if (trackA > trackB) {
        return 1
      }

      return 0
    })

    if (!this.state.isConnected) {
      let logout = { pathname: '/logout' }
      return (<Redirect to={logout} />)
    }

    const playlistTracks = tracksSorted.map((track) => {
      return <Track track={track} />
    })

    return (
      <div className='lyrics'>
        <NavBar isConnected />
        <div className='content'>
          <div className='container'>
            <Loader loaded={this.state.loaded} options={spinerConfig} className='spinner'>
              <h1 className='text-center'>{this.state.playlist.name}</h1>
              <div className='row track-head'>
                <div className='col-sm-4 col-xs-6 text-left'>
                  <p>Titulo</p>
                </div>
                <div className='col-sm-4 artist-name text-left'>
                  <p>Artista</p>
                </div>
                <div className='col-sm-4 col-xs-6 text-right'>
                  Letra
                </div>
              </div>
              <ul className='list-unstyled'>{playlistTracks}</ul>
            </Loader>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistWithLyrics

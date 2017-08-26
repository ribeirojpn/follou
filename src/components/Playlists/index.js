import React, {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Playlist from './playlist'
import NavBar from './../NavBar'

class Playlists extends Component {
  constructor (props) {
    super(props)
    this.state = { playlists: [], profile: {}, isConnected: true }
    this.userPlaylists = this.userPlaylists.bind(this)
  }

  userPlaylists () {
    axios.get('/api/user/playlists', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Spotify': `Spotify ${localStorage.getItem('spotify_token')}`
      }
    }).then((response) => {
      this.setState({ playlists: response.data.playlists })
      this.setState({ profile: response.data.profile })
      localStorage.setItem('profile', JSON.stringify(response.data.profile))
    }).catch((erro) => {
      this.setState({isConnected: false})
    })
  }

  componentDidMount () {
    this.userPlaylists()
  }

  render () {
    if (!this.state.isConnected) {
      let logout = { pathname: '/logout' }
      return (<Redirect to={logout} />)
    }
    const listItems = this.state.playlists.map((playlist) =>
      <Playlist playlistData={playlist} />
    )
    return (
      <div className='playlists'>
        <NavBar isConnected={this.state.isConnected} />
        <div className='content'>
          <div className='container'>
            <h1 className='text-center'>Playlists</h1>
            {listItems}
          </div>
        </div>
      </div>
    )
  }
}

export default Playlists

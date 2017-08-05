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
      console.log(response.status, response)
      if (response.status === 401 || response.status === 500) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('spotify_token')
        localStorage.removeItem('profile')
        this.setState({isConnected: false})
      } else {
        this.setState({ playlists: response.data.playlists })
        this.setState({ profile: response.data.profile })
        localStorage.setItem('profile', JSON.stringify(response.data.profile))
      }
    }).catch((erro) => {
      console.log(erro)
    })
  }

  componentDidMount() {
    this.userPlaylists()
  }

  render () {
    console.log(this.state.playlists)

    if (!this.state.isConnected) {
      let home = { pathname: '/' }
      return (<Redirect to={home} />)
    }
    const listItems = this.state.playlists.map((playlist) =>
      <Playlist playlistData={playlist}/>
    )
    return (
      <div className="playlists">
        <NavBar isConnected={this.state.isConnected}/>
        <div className="content">
          <div className="container">
            <h2 className="text-center">Suas playlists</h2>
            {listItems}
          </div>
        </div>
      </div>
    )
  }
}

export default Playlists

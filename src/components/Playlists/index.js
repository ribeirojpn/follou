import React, {Component} from 'react'
import axios from 'axios'

class Playlists extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = { playlists: [] }
    this.userPlaylists = this.userPlaylists.bind(this)
  }

  userPlaylists () {
    console.log('fetch in server')
    axios.get('/api/user/playlists', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Spotify': `Spotify ${localStorage.getItem('spotify_token')}`
      }
    }).then((response) => {
      console.log(response)
      this.setState({ playlists: response.data })
    }).catch((erro) => {
      console.log(erro);
    })
  }

  componentDidMount() {
    this.userPlaylists()
  }

  render () {
    const listItems = this.state.playlists.map((playlist) =>
      <li>{playlist.name}</li>
    )

    return (
      <div className="container">
        <p>Hello Everyone</p>
         <ul>{listItems}</ul>
      </div>
    )
  }
}

export default Playlists

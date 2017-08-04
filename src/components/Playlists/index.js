import React, {Component} from 'react'
import axios from 'axios'

class Playlists extends Component {
  constructor (props) {
    super(props)
    this.state = { playlists: [], profile: {} }
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
      console.log(erro)
    })
  }

  componentDidMount() {
    this.userPlaylists()
  }

  render () {
    const listItems = this.state.playlists.map((playlist) =>
      <li><a href={`/playlist?id=${playlist.id}&user=${this.state.profile.id}`}>{playlist.name}</a></li>
    )

    return (
      <div className="container">
        <h2>Suas Playlists</h2>
        <ul className="list-unstyled">{listItems}</ul>
        <a href="/logout">Desconectar</a>
      </div>
    )
  }
}

export default Playlists
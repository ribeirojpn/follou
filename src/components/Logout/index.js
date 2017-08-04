import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Logout extends Component {
  constructor (props) {
    super(props)
    localStorage.removeItem('access_token')
    localStorage.removeItem('spotify_token')
  }

  render () {
    let home = { pathname: '/' }
    return (<Redirect to={home} />)
  }
}

export default Logout

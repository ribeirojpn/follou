import React, { Component } from 'react'
import './style.css'

class NavBar extends Component {
  render () {
    let menuContent
    if (this.props.isConnected) {
      menuContent = (
        <ul className='nav navbar-nav navbar-text navbar-right'>
          <li><a className='navbar-link' href='/playlists'>Playlists</a></li>
          <li><a className='navbar-link' href='/logout'>Logout</a></li>
        </ul>
      )
    } else {
      menuContent = (
        <div className='navbar-text navbar-right'><a className='navbar-link' href='/'>Login</a></div>
      )
    }

    return (
      <nav className='navbar navbar-inverse navbar-fixed-top navbar-follou'>
        <div className='container'>
          <div className='navbar-header'>
            <a href='/' className='navbar-brand follou-logo'>Follou</a>
          </div>
          {menuContent}
        </div>
      </nav>
    )
  }
}

export default NavBar

import React, {Component} from 'react'
import './style.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='container'>
          <p className='text-center'>
            Made with <i className='fa fa-heart' aria-hidden='true' /> by <a href='https://twitter.com/ribeirojpn'>@RibeiroJPN</a>
            <br />
            Alpha v0.4.2.170826
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer

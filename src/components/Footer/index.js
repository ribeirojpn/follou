import React, {Component} from 'react'
import './style.css'

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-center">
            Made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://twitter.com/ribeirojpn">@RibeiroJPN</a>
            <br />
            Alpha v0.3.2
            (numero qualquer pra deixar claro que ainda ta bugado)
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer

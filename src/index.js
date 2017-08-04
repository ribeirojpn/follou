import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css'

// based on tutorial must be removed
// import registerServiceWorker from './registerServiceWorker'

const history = createBrowserHistory()

ReactDOM.render(
  <Routes history={history} />,
  document.getElementById('root')
)
// registerServiceWorker()

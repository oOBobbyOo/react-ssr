import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import App from '../App'
import { getClientStore } from '../store'

// SSR render需要用hydrate替换注水
ReactDOM.hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

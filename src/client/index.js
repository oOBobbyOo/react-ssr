import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

// SSR render需要用hydrate替换注水
ReactDOM.hydrate(<App />, document.getElementById('root'))

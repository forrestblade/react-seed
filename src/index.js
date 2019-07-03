import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import App from './application/index.connected.js'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

module.hot.accept()

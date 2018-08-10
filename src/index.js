import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { defaultState } from './state/defaultState'

import { configureStore } from './state'

const store = configureStore(defaultState)

const rootEl = document.getElementById('root')

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  )
registerServiceWorker()

render()
store.subscribe(render)

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { App } from './components'
import registerServiceWorker from './registerServiceWorker'

import { nextAction } from './reducers'

const store = createStore(nextAction)
const rootEl = document.getElementById('root')

const render = () =>
  ReactDOM.render(
    <App
      value={store.getState()}
      nextAction={() => store.dispatch({ type: 'NEXT_ACTION' })}
    />,
    rootEl
  )
registerServiceWorker()

render()
store.subscribe(render)

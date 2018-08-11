import React from 'react'
import { connect } from 'react-redux'

import { Bottom, Top } from '..'

import {
  itemsFetchDataSuccess,
  itemsHasErrored,
  itemsIsLoading
} from '../../state'

const apiUrl =
  'https://visawoap.com/api/venues/limit:1000/.json?key=4e44f1ac85cd60e3caa56bfd4afb675e'

function App ({ fetchData }) {
  return (
    <div className='App'>
      <Top />
      {fetchData()}
      <Bottom />
    </div>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => {
      dispatch(itemsIsLoading(true))
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText)
          }

          dispatch(itemsIsLoading(false))

          return response
        })
        .then(response => response.json())
        .then(items => dispatch(itemsFetchDataSuccess(items.venues)))
        .catch(() => dispatch(itemsHasErrored(true)))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)

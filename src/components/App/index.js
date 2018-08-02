import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Bottom } from '..'

import { StyledTop, StyledTitle } from '../styled'
import { Restaurant } from '../'

export function App ({ name, website }) {
  return (
    <div className='App'>
      <StyledTop>
        <StyledTitle>Eat at fuckin</StyledTitle>
        <Restaurant name={name} website={website} />
      </StyledTop>

      <Bottom />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    name: state.selectedRestaurant.name,
    website: state.selectedRestaurant.website
  }
}

export default connect(mapStateToProps, null)(App)

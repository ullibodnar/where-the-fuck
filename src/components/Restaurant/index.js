import React from 'react'
import { connect } from 'react-redux'

import { StyledRestaurant } from './style'

const Restaurant = ({ name, website }) => {
  return (
    <StyledRestaurant href={website} target={'_blank'}>
      {name}
    </StyledRestaurant>
  )
}

export default Restaurant

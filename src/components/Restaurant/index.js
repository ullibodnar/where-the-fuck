import React from 'react'

import { StyledRestaurant } from './style'

const Restaurant = ({ Venue }) => {
  return (
    <StyledRestaurant href={Venue.website} target={'_blank'}>
      {Venue.title}
    </StyledRestaurant>
  )
}

export default Restaurant

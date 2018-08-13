import React from 'react'
import { isEmpty } from 'ramda'

import {
  BurgerName,
  LoadingPlacesToEat,
  FloatingIcon,
  RestaurantTitle
} from '../'

import { StyledRestaurantDetails } from '../styled'

import {
  REGION_FLAG,
  VIEWS_FLAG,
  BURGER_DETAILS_FLAG
} from '../../state/constants'

const Restaurant = ({ Venue, Event, items }) => {
  if (!items) {
    return <LoadingPlacesToEat />
  }

  return (
    <div>
      {BURGER_DETAILS_FLAG && <BurgerName Event={Event} />}

      <FloatingIcon />

      <RestaurantTitle Venue={Venue} />

      {REGION_FLAG &&
        <StyledRestaurantDetails>
          ({Venue.region})
        </StyledRestaurantDetails>}

      {isEmpty(Event)
        ? undefined
        : VIEWS_FLAG &&
        <div>
              Views: {Event[0].views}
        </div>}

    </div>
  )
}

export default Restaurant

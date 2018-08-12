import React from 'react'
import { isEmpty } from 'ramda'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import {
  StyledRestaurant,
  StyledRestaurantDetails,
  StyledFloatingSection
} from './style'

import { BurgerName } from '../'

import {
  REGION_FLAG,
  MAP_FLAG,
  VIEWS_FLAG,
  BURGER_DETAILS_FLAG
} from '../../state/constants'

function formatWebsiteCorrectly (website) {
  // TODO: Some venues don't have websites so we need to fix this so there is no link or something
  if (website === '') {
    return '#'
  }
  const wwwFormatting = 'www'
  const httpFormatting = 'http'

  const isHttp = website.startsWith(httpFormatting)
  const isWww = website.startsWith(wwwFormatting)
  if (isHttp) {
    return website
  }
  if (isWww) {
    return 'http://' + website
  }
  return 'http://www.' + website
}

const Restaurant = ({ Venue, Event, items }) => {
  const website = formatWebsiteCorrectly(Venue.website)
  if (!items) {
    return (
      <div>
        <StyledRestaurantDetails>
          Loading some good fuckin' places to eat...
        </StyledRestaurantDetails>
      </div>
    )
  }

  return (
    <div>
      {BURGER_DETAILS_FLAG && <BurgerName Event={Event} />}

      <StyledFloatingSection>
        <FontAwesomeIcon icon={faMapMarkerAlt} size='3x' />
      </StyledFloatingSection>

      <StyledRestaurant href={website} target={'_blank'}>
        {Venue.title}
      </StyledRestaurant>

      {REGION_FLAG &&
        <StyledRestaurantDetails>
          ({Venue.region})
        </StyledRestaurantDetails>}

      {isEmpty(Event)
        ? undefined
        : VIEWS_FLAG &&
        <StyledRestaurantDetails>
              Views: {Event[0].views}
        </StyledRestaurantDetails>}

    </div>
  )
}

export default Restaurant

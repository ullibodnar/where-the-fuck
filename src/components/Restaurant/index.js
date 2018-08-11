import React from 'react'
import { isEmpty } from 'ramda'

import { StyledRestaurant, StyledRestaurantDetails } from './style'
import { BurgerDetails } from '../'
import {REGION_FLAG, MAP_FLAG, VIEWS_FLAG, BURGER_DETAILS_FLAG} from '../../state/constants'


const mapKey = 'AIzaSyD_1dPGiRnu7LDb7Lptg-K-ZghT6PF62ww'

function formatWebsiteCorrectly(website) {
  console.log('the venues website is:', website)
  // TODO: Some venues don't have websites so we need to fix this so there is no link or something
  if (website === '') {
    return 'https://www.google.com'
  }
  const wwwFormatting = 'www'
  const httpFormatting = 'http'

  const isHttp = website.startsWith(httpFormatting)
  const isWww = website.startsWith(wwwFormatting)
  if (isHttp) {
    return website
  }
  if (isWww) {
    return ('https://'+website)
  }
  return ('https://www.' + website)
}

const Restaurant = ({ Venue, Event, itemsIsLoading }) => {
  let imgUrl =
    'https://maps.googleapis.com/maps/api/staticmap?center=' +
    Venue.address1 +
    ',Wellington,NZ&key=' +
    mapKey +
    '&size=400x400&markers=label:' +
    Venue.address1

  const website = formatWebsiteCorrectly(Venue.website)

  console.log("burger details to restaurant:", Event)

  if (itemsIsLoading) {
    return (
      <div>
        <StyledRestaurantDetails>
          Loading some good fuckin' places to eat...
        </StyledRestaurantDetails>
      </div>
    )
  }

  return (
    <div >
      <StyledRestaurant href={website} target={'_blank'}>
        {Venue.title}
      </StyledRestaurant>

      { REGION_FLAG && <StyledRestaurantDetails>Region: {Venue.region}</StyledRestaurantDetails> }

      {isEmpty(Event)
        ? undefined
        : VIEWS_FLAG && <StyledRestaurantDetails>
             Views: {Event[0].views}
        </StyledRestaurantDetails>}
        
      { BURGER_DETAILS_FLAG && <BurgerDetails Event={Event} /> }

      { MAP_FLAG && <img src={imgUrl} alt={'location map'} /> }

    </div>
  )
}

export default Restaurant

import React from 'react'

import { StyledRestaurantTitleButton } from '../styled'

function RestaurantTitle ({ Venue }) {
  const formattedWebsite = formatWebsiteCorrectly(Venue.website)

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

  return (
    <StyledRestaurantTitleButton href={formattedWebsite} target={'_blank'}>
      {Venue.title}
    </StyledRestaurantTitleButton>
  )
}

export default RestaurantTitle

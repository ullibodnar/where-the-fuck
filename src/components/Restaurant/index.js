import React from 'react'
import { isEmpty } from 'ramda'

import { StyledRestaurant, StyledRestaurantDetails } from './style'

const mapKey = 'AIzaSyD_1dPGiRnu7LDb7Lptg-K-ZghT6PF62ww'

const Restaurant = ({ Venue, Event }) => {
  let imgUrl =
    'https://maps.googleapis.com/maps/api/staticmap?center=' +
    Venue.address1 +
    ',Wellington,NZ&key=' +
    mapKey +
    '&size=400x400&markers=label:' +
    Venue.address1

  return (
    <div
    // style={
    //   isEmpty(Event)
    //     ? { background: 'black' }
    //     : {
    //       backgroundColor: 'black',
    //       backgroundImage: 'url(' + Event[0].image + ')',
    //       backgroundRepeat: 'no-repeat',
    //       backgroundPosition: 'center',
    //       backgroundSize: 'cover',
    //       backgroundBlendMode: 'darken'
    //     }
    // }
    >

      <StyledRestaurant href={Venue.website} target={'_blank'}>
        {Venue.title}
      </StyledRestaurant>
      <StyledRestaurantDetails>Region: {Venue.region}</StyledRestaurantDetails>

      {isEmpty(Event)
        ? undefined
        : <StyledRestaurantDetails>
            Views: {Event[0].views}
        </StyledRestaurantDetails>}

      {/* <iframe
        width='600'
        height='450'
        frameBorder='0'
        style={{ border: 0 }}
        src={
          'https://www.google.com/maps/api/staticmap?search?q=' +
            Venue.address1 +
            '&key=AIzaSyD_1dPGiRnu7LDb7Lptg-K-ZghT6PF62ww'
        }
      /> */}
      <img src={imgUrl} />
    </div>
  )
}

export default Restaurant

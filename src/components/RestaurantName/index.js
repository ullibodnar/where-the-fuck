import styled from 'styled-components'
import React from 'react'

const StyledRestaurantName = styled.a`
  font-size: 3em;
  color: white;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:visited {
    color: white;
  }
`

const RestaurantName = ({ value }) => {
  return (
    <StyledRestaurantName href={value.website} target={'_blank'}>
      {value.name}
    </StyledRestaurantName>
  )
}

export default RestaurantName

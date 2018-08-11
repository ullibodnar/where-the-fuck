import styled from 'styled-components'

export const StyledRestaurant = styled.a`
  color: white;
  text-decoration: none;
  margin: 0;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:visited {
    color: white;
  }

`
StyledRestaurant.displayName = 'StyledRestaurant'

export const StyledRestaurantDetails = styled.p`
  margin: 20px;
  font-size: 30px;
`
StyledRestaurantDetails.displayName = 'StyledRestaurantDetails'

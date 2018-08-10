import styled from 'styled-components'

export const StyledRestaurant = styled.a`
  color: white;
  text-decoration: none;
  margin: 0;
  font-size: 120px;
  line-height: 200px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:visited {
    color: white;
  }

  @media only screen and (max-width : 1500px) {
    font-size: 90px;
    line-height: 130px;
  }

  @media only screen and (max-width : 820px) {
    font-size: 60px;
    line-height: 80px;
  }
`
StyledRestaurant.displayName = 'StyledRestaurant'

export const StyledRestaurantDetails = styled.p`
  margin: 20px;
  font-size: 30px;
`
StyledRestaurantDetails.displayName = 'StyledRestaurantDetails'

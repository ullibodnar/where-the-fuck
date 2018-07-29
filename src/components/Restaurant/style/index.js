import styled from 'styled-components'

export const StyledRestaurant = styled.a`
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

StyledRestaurant.displayName = 'StyledRestaurant'

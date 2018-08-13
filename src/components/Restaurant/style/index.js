import styled from 'styled-components'

export const StyledRestaurant = styled.a`
  color: white;
  text-decoration: none;
  margin: 0;
  font-size: 1.5em;
  border: 2px solid white;
  padding:

  @media only screen and (min-height: 480px){
    font-size: 1.8em;
  }
  
  @media only screen and (min-height: 600px) {
    font-size: 2em;
    margin: .5em 0;
  }
  @media only screen and (min-height: 850px) {
    font-size: 3em;
    margin: 1em 0;
  }
`
StyledRestaurant.displayName = 'StyledRestaurant'

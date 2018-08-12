import styled, { keyframes } from 'styled-components'

export const StyledRestaurant = styled.a`
  color: white;
  text-decoration: none;
  margin: 0;
  font-size: 1.5em;

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

export const StyledRestaurantDetails = styled.p`
  margin: 0;
  font-size: 1.5em;
  color: #cccccc;
`
StyledRestaurantDetails.displayName = 'StyledRestaurantDetails'

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
`

export const StyledFloatingSection = styled.div`
  transform: translatey(0px);
	animation: ${float} 2s ease infinite;
`

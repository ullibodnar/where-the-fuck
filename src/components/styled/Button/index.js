import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  cursor: pointer;
  transition: all .2s ease;
  font-size: 1.8em;
  border: none;
  text-decoration: none;

  @media only screen and (min-width: 500px) {
    padding: 0 0.4em;
    font-size: 3em;
  }
`
Button.displayName = 'StyledButton'

const WhiteButton = styled.button`
  display: inline-block;
  cursor: pointer;
  transition: all .2s ease;
  font-size: 1.8em;
  border: none;
  text-decoration: none;

  @media only screen and (min-width: 500px) {
    padding: 0 0.4em;
    font-size: 3em;
  }

  &:focus {outline:0;}

  background: transparent;
  border: 2px solid black;

  &:hover {
    background:black;
    color: white;
  }
`
WhiteButton.displayName = 'StyledWhiteButton'

const RestaurantTitleButton = Button.extend`
  color: white;
  border-bottom: 2px solid white;
  background: black;
`

export { WhiteButton, RestaurantTitleButton }

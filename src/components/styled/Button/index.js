import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  background: transparent;
  border: 2px solid black;
  transition: all .2s ease;
  font-size: 1.8em;

  &:focus {outline:0;}
  &:hover {
    background:black;
    color: white;
  }

  @media only screen and (min-width: 500px) {
    padding: 0 0.4em;
    font-size: 3em;
  }
`

Button.displayName = 'StyledButton'

export default Button

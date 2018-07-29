import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  cursor: pointer;
  background: transparent;
  border: 2px solid black;
  font-size: 1em;
  transition: all .2s ease;
  &:focus {outline:0;}
  &:hover {
    background:black;
    color: white;
  }
  
`

Button.displayName = 'StyledButton'

export default Button

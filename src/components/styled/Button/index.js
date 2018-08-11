import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  cursor: pointer;
  background: transparent;
  border: 2px solid black;
  transition: all .2s ease;
  font-size: 40px;

  &:focus {outline:0;}
  &:hover {
    background:black;
    color: white;
  }

  @media only screen and (max-width : 480px) {
    font-size: 2.2em;
    padding: 0.5rem 0.4rem;
    margin: 0.5rem 0.4rem;
  }
  
`

Button.displayName = 'StyledButton'

export default Button

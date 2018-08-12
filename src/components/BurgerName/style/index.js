import styled from 'styled-components'

export const StyledBurgerName = styled.h1`
  color: white;
  margin: 0;
  font-size: 2em;
  line-height: 1.2;
  margin-bottom: 1em;
  overflowWrap: break-word;
  hyphens: auto;

  @media only screen and (min-width: 480px) {
    font-size: 3em;
  }
    
  @media only screen and (min-width: 820px) {
    font-size: 3.5em;
  }

  @media only screen and (min-width: 1500px) {
    font-size: 3.5em;
  }

  

  
`
StyledBurgerName.displayName = 'StyledBurgerName'

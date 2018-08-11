import styled from 'styled-components'

export const StyledBurgerName = styled.h1`
  color: white;
  margin: 0;
  font-size: 4em;
  line-height: 1.2;
  margin-bottom: 0.6em;
  overflowWrap: break-word;
  hyphens: auto;
    
  @media only screen and (max-width : 1500px) {
    font-size: 3.5em;
  }

  @media only screen and (max-width : 820px) {
    font-size: 3.5em;
  }

  @media only screen and (max-width : 480px) {
    font-size: 3em;
  }
`
StyledBurgerName.displayName = 'StyledBurgerName'

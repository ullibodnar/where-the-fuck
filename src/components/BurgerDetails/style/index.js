import styled from 'styled-components'

export const StyledBurgerName = styled.h1`
  color: white;
  margin: 0;
  font-size: 120px;

  @media only screen and (max-width : 1500px) {
    font-size: 90px;
  }

  @media only screen and (max-width : 820px) {
    font-size: 60px;
  }
`
StyledBurgerName.displayName = 'StyledBurgerName'

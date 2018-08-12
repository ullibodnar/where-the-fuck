import styled from 'styled-components'

export const StyledBurgerName = styled.h1`
  color: white;
  margin: 0;
  font-size: 1.8em;
  line-height: 1.2;
  margin-bottom: 1em;
  overflowWrap: break-word;
  hyphens: auto;
  transition: all .3s ease;

  @media only screen and (min-width: 350px) {
    @media only screen and (min-height: 600px) {
      font-size: 3em;
      margin: .5em 0;
    }
  }

  @media only screen and (min-width: 650px) {
    @media only screen and (min-height: 600px) {
      font-size: 3.5em;
      margin: .5em 0;
    }

    @media only screen and (min-height: 800px) {
      font-size: 5em;
    }
  }

  @media only screen and (min-width: 850px) {
    @media only screen and (min-height: 600px) {
      font-size: 3.5em;
      margin: .5em 0;
    }

    @media only screen and (min-height: 750px) {
      font-size: 5em;
      margin: 1em 0;
    }
  }

`
StyledBurgerName.displayName = 'StyledBurgerName'

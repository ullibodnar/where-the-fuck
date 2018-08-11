import styled from 'styled-components'

const Title = styled.p`
  font-size: 2em;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
  line-height: 1;

  @media only screen and (max-width : 480px) {
  }
`
Title.displayName = 'StyledTitle'

export default Title

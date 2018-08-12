import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  transition: all .3s ease;
`
Wrapper.displayName = 'StyledWrapper'

const Top = Wrapper.extend`
  background: black;
  color: white;
  margin: 0;
  height: 70vh;
  overflow: scroll;

  @media only screen and (min-height: 750px) {
    height: 80vh;
  }
`
Top.displayName = 'StyledTop'

const Bottom = Wrapper.extend`
`
Bottom.displayName = 'StyledBottom'

export { Top, Bottom }

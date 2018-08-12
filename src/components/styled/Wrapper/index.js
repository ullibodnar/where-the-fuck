import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`
Wrapper.displayName = 'StyledWrapper'

const Top = Wrapper.extend`
  background: black;
  color: white;
  margin: 0;
  height: 75vh;
  overflow: scroll;

  @media only screen and (min-height: 500px) {
    height: 80vh;
  }

  @media only screen and (min-height: 650px) {
    height: 83vh;
  }

  @media only screen and (min-height: 800px) {
    height: 83vh;
  }
`
Top.displayName = 'StyledTop'

const Bottom = Wrapper.extend`
  
`
Bottom.displayName = 'StyledBottom'

export { Top, Bottom }

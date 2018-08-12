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
  height: 80vh;
`
Top.displayName = 'StyledTop'

const Bottom = Wrapper.extend`
  
`
Bottom.displayName = 'StyledBottom'

export { Top, Bottom }

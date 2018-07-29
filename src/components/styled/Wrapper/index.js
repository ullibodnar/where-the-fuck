import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 4em;
  padding: 40px;
  text-align: center;
`
Wrapper.displayName = 'StyledWrapper'

const Top = Wrapper.extend`
  background: black;
  color: white;
  margin: 0;
  height: 60vh;
`
Top.displayName = 'StyledTop'

const Bottom = Wrapper.extend`
  
`
Bottom.displayName = 'StyledBottom'

export { Top, Bottom }

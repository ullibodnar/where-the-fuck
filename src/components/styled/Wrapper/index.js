import styled from 'styled-components'

const wrapper = styled.div`
  height: 50vh;
  font-size: 4em;
  padding: 40px;
  text-align: center;
`
wrapper.displayName = 'StyledWrapper'

const top = wrapper.extend`
  background: black;
  color: white;
`
top.displayName = 'StyledTop'

const bottom = wrapper.extend`
  
`
bottom.displayName = 'StyledBottom'

export { top, bottom }

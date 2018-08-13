import styled, { keyframes } from 'styled-components'

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
`

const StyledFloatingDiv = styled.div`
  transform: translatey(0px);
	animation: ${float} 2s ease infinite;
`
StyledFloatingDiv.displayName = 'StyledFloatingDiv'

export default StyledFloatingDiv

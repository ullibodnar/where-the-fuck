import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import StyledFloatingDiv from './style'

function FloatingIcon () {
  return (
    <StyledFloatingDiv>
      <FontAwesomeIcon icon={faMapMarkerAlt} size='3x' />
    </StyledFloatingDiv>
  )
}

export default FloatingIcon

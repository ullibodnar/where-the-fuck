import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { CAFE_FLAG } from '../../state/constants'

const style = {
    'position': 'absolute',
    'left': '50px'
}

const CafeButton = () => {
  return (
    <div style={style}>
        { CAFE_FLAG && <FontAwesomeIcon icon={faCoffee} size="3x" /> }
    </div>
  )
}

export default CafeButton

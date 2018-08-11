import React from 'react'
import { StyledBurgerName } from './style'

const BurgerDetails = ({ Event }) => {
  return (
    <StyledBurgerName>
      {Event[0].name_of_burger}
    </StyledBurgerName>
  )
}

export default BurgerDetails

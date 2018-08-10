import React from 'react'
import { StyledTop, StyledTitle } from '../styled'
import { Restaurant } from '../../containers'

export default function Top () {
  return (
    <StyledTop>
      <StyledTitle>Eat at fuckin'</StyledTitle>
      <Restaurant />
    </StyledTop>
  )
}

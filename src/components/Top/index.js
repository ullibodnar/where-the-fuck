import React from 'react'
import { StyledTop, StyledTitle } from '../styled'
import { Restaurant } from '../../containers'
import { CafeButton } from '../../components'

export default function Top () {
  return (
    <StyledTop>
      <CafeButton />
      <StyledTitle>Eat at fuckin'</StyledTitle>
      <Restaurant />
    </StyledTop>
  )
}

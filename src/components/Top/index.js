import React from 'react'
import { StyledTop, StyledTitle } from '../styled'
import { Restaurant } from '../../containers'
import { CafeButton } from '../../components'

export default function Top () {
  return (
    <StyledTop>
      <CafeButton />

      <StyledTitle>Why not try a fuckin'</StyledTitle>

      <Restaurant />
    </StyledTop>
  )
}

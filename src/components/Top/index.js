import React from 'react'
import { StyledTop } from '../styled'

export default function Top () {
  return (
    <StyledTop>
      <StyledTitle>Eat at fuckin</StyledTitle>
      <Restaurant name={name} website={website} />
    </StyledTop>
  )
}

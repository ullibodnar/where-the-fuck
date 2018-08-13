import React from 'react'
import { StyledWhiteButton } from '../styled'

export default function FuckThatButton ({ fuckThatButtonClicked }) {
  return (
    <StyledWhiteButton onClick={fuckThatButtonClicked}>
      Nah, fuck that
    </StyledWhiteButton>
  )
}

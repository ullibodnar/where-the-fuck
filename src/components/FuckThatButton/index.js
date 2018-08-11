import React from 'react'
import { StyledButton } from '../styled'

export default function FuckThatButton ({ fuckThatButtonClicked }) {
  return (
    <StyledButton onClick={fuckThatButtonClicked}>
      Nah, fuck that
    </StyledButton>
  )
}

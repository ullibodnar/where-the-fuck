import React, { Component } from 'react'

import { StyledTop, StyledBottom, StyledButton } from '../styled'
import { RestaurantName } from '../'

class App extends Component {
  render () {
    const { value, nextAction } = this.props
    return (
      <div className='App'>
        <StyledTop>
          <p>Eat at fuckin</p>
          <RestaurantName value={value} />
        </StyledTop>
        <StyledBottom>
          <StyledButton onClick={nextAction}>
            Nah, fuck that
          </StyledButton>
        </StyledBottom>
      </div>
    )
  }
}

export default App

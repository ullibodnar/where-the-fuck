import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StyledTop, StyledBottom, StyledButton, StyledTitle } from '../styled'
import { Restaurant } from '../'
import { fuckThatButtonClicked, FUCK_THAT_BUTTON_CLICKED } from '../../state'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <StyledTop>
          <StyledTitle>Eat at fuckin</StyledTitle>
          <Restaurant name={this.props.name} website={this.props.website} />
          {/* <p>Rating: {value.restaurant.rating}</p> */}
        </StyledTop>
        <StyledBottom>
          <StyledButton onClick={this.props.fuckThatButtonClicked}>
            Nah, fuck that
          </StyledButton>
        </StyledBottom>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.selectedRestaurant.name,
    website: state.selectedRestaurant.website
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fuckThatButtonClicked: () => {
      dispatch({ type: FUCK_THAT_BUTTON_CLICKED })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

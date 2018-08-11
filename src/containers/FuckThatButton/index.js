import { connect } from 'react-redux'
import { FUCK_THAT_BUTTON_CLICKED } from '../../state'
import FuckThatButton from '../../components/FuckThatButton'

function mapDispatchToProps (dispatch) {
  return {
    fuckThatButtonClicked: () => {
      dispatch({ type: FUCK_THAT_BUTTON_CLICKED })
    }
  }
}

export default connect(null, mapDispatchToProps)(FuckThatButton)

import { connect } from 'react-redux'

import { getSelectedRestaurant } from '../../state'
import Restaurant from '../../components/Restaurant'

const mapStateToProps = state => {
  const { Venue, Event } = getSelectedRestaurant(state)
  return {
    Venue,
    Event
  }
}

export default connect(mapStateToProps)(Restaurant)

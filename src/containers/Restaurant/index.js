import { connect } from 'react-redux'

import { getSelectedRestaurant, getItems } from '../../state'
import Restaurant from '../../components/Restaurant'

const mapStateToProps = state => {
  const { Venue, Event } = getSelectedRestaurant(state)

  const items = getItems(state).restaurants

  return {
    Venue,
    Event,
    items
  }
}

export default connect(mapStateToProps)(Restaurant)

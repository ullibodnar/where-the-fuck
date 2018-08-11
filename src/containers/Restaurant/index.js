import { connect } from 'react-redux'

import { getSelectedRestaurant, getItemsIsLoading } from '../../state'
import Restaurant from '../../components/Restaurant'

const mapStateToProps = state => {
  const { Venue, Event } = getSelectedRestaurant(state)

  const itemsIsLoading = getItemsIsLoading(state)

  return {
    Venue,
    Event,
    itemsIsLoading
  }
}

export default connect(mapStateToProps)(Restaurant)

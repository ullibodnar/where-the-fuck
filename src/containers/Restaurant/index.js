import { connect } from 'react-redux'

import { getRestaurant } from '../../state'
import Restaurant from '../../components/Restaurant'

const mapStateToProps = state => {
  const { Venue, website } = getRestaurant(state)
  return {
    Venue,
    website
  }
}

export default connect(mapStateToProps)(Restaurant)

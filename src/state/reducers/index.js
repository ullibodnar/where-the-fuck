import { combineReducers } from 'redux'
import { defaultState } from '../defaultState'

import {
  FUCK_THAT_BUTTON_CLICKED,
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS
} from '..'

function itemsHasErrored (state = false, { type, hasErrored }) {
  switch (type) {
    case ITEMS_HAS_ERRORED:
      return hasErrored

    default:
      return state
  }
}

function itemsIsLoading (state = false, action) {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading

    default:
      return state
  }
}

function items (state = defaultState, { type, payload }) {
  switch (type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      const x = pickBurgerJoint(payload)
      console.log('first: ', x.Venue.id)
      return {
        ...state,
        restaurants: payload,
        selectedRestaurant: x,
        viewedRestaurants: [],
        unviewedRestaurants: payload
      }
    case FUCK_THAT_BUTTON_CLICKED:
      return {
        ...state,
        viewedRestaurants: [
          ...state.viewedRestaurants,
          state.selectedRestaurant.Venue.id
        ],
        unviewedRestaurants: state.restaurants.filter(
          restaurant =>
            !state.viewedRestaurants.includes(restaurant.Venue.id.toString())
        ),
        selectedRestaurant: pickNextBurgerJoint(state)
      }

    default:
      return state
  }
}

function pickNextBurgerJoint (state) {
  const restaurant = pickBurgerJoint(state.unviewedRestaurants)

  return restaurant
}

function pickBurgerJoint (restaurants) {
  const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)]

  const eventExists = restaurant.Event
  const nameOfBurgerExists =
    restaurant.Event[0] && restaurant.Event[0].name_of_burger

  if (eventExists) {
    if (nameOfBurgerExists) {
      return restaurant
    }
    return pickBurgerJoint(restaurants)
  } else {
    return pickBurgerJoint(restaurants)
  }
}

export default combineReducers({
  itemsHasErrored,
  itemsIsLoading,
  items
})

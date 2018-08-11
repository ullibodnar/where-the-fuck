import { combineReducers } from 'redux'
import { isEmpty } from 'ramda'

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
      return {
        ...state,
        restaurants: payload,
        selectedRestaurant: pickBurgerJoint(payload)
      }
    case FUCK_THAT_BUTTON_CLICKED:
      return {
        ...state,
        selectedRestaurant: pickBurgerJoint(state.restaurants)
      }

    default:
      return state
  }
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
    console.log('New restaurant should be called')
    return pickBurgerJoint(restaurants)
  }
}

export default combineReducers({
  itemsHasErrored,
  itemsIsLoading,
  items
})

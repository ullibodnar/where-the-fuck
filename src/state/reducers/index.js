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
      return {
        ...state,
        restaurants: payload
      }
    case FUCK_THAT_BUTTON_CLICKED:
      return {
        ...state,
        selectedRestaurant: state.restaurants[
          Math.floor(Math.random() * state.restaurants.length)
        ]
      }

    default:
      return state
  }
}

export default combineReducers({
  itemsHasErrored,
  itemsIsLoading,
  items
})

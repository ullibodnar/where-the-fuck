import { defaultState } from '../defaultState'
import { FUCK_THAT_BUTTON_CLICKED } from '..'

export const rootReducer = (state = defaultState, { type }) => {
  switch (type) {
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

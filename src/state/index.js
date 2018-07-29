import { FUCK_THAT_BUTTON_CLICKED } from './constants.js'
import { rootReducer } from './reducers'
import { fuckThatButtonClicked } from './actions'
import configureStore from './store'

export {
  FUCK_THAT_BUTTON_CLICKED,
  fuckThatButtonClicked,
  rootReducer,
  configureStore
}

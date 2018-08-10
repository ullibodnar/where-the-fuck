import {
  FUCK_THAT_BUTTON_CLICKED,
  ITEMS_FETCH_DATA_SUCCESS,
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING
} from '..'

export function fuckThatButtonClicked () {
  return {
    type: FUCK_THAT_BUTTON_CLICKED
  }
}

export function itemsHasErrored (bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
  }
}

export function itemsIsLoading (bool) {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool
  }
}

export function itemsFetchDataSuccess (items) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    payload: items
  }
}

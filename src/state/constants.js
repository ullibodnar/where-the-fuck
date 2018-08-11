export const FUCK_THAT_BUTTON_CLICKED = 'FUCK_THAT_BUTTON_CLICKED'
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED'
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING'
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS'

// Feature flags
export let CAFE_FLAG = true
export let REGION_FLAG = true
export let MAP_FLAG = false
export let VIEWS_FLAG = false
export let BURGER_DETAILS_FLAG = true

export let USE_REAL_API_FLAG = false

//setAll(false)

function setAll(value) {
    CAFE_FLAG = value
    REGION_FLAG = value
    MAP_FLAG = value
    VIEWS_FLAG = value
    BURGER_DETAILS_FLAG = value
    USE_REAL_API_FLAG = value
}

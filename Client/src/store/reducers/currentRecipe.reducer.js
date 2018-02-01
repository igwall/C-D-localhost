import {defaultRecipeState} from '../store'

export default (state = defaultRecipeState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPE_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_RECIPE_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        recipe: action.payload
      }
    }
    case 'FETCH_RECIPE_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

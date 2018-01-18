import {defaultRecipesState} from '../store'

export default (state = defaultRecipesState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPES_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_RECIPES_SUCCESS': {
      return {
        ...state,
        fetching: false,
        elements: action.payload
      }
    }
    case 'FETCH_RECIPES_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'NEW_RECIPE': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    default:
      return {
        ...state
      }
  }
}

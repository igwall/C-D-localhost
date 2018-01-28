import {defaultQuotesState} from '../store'

export default (state = defaultQuotesState, action) => {
  switch (action.type) {
    case 'FETCH_QUOTES_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_QUOTES_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        elements: action.payload
      }
    }
    case 'FETCH_QUOTES_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'NEW_QUOTE': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    case 'DELETE_QUOTE': {
      let newElements = state.elements.slice()
      newElements = newElements.filter(quote => quote._id !== action.payload)
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

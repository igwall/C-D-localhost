import {defaultReferencesState} from '../store'

export default (state = defaultReferencesState, action) => {
  switch (action.type) {
    case 'FETCH_REFERENCES_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_REFERENCES_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        elements: action.payload
      }
    }
    case 'FETCH_REFERENCES_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'NEW_REFERENCE': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    case 'DELETE_REFERENCE': {
      let newElements = state.elements.slice()
      newElements = newElements.filter(reference => reference._id !== action.payload)
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

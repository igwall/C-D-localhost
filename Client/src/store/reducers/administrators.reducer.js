import {defaultAdministratorsState} from '../store'

export default (state = defaultAdministratorsState, action) => {
  switch (action.type) {
    case 'FETCH_ADMINISTRATORS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_ADMINISTRATORS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        elements: action.payload
      }
    }
    case 'FETCH_ADMINISTRATORS_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'ADD_ADMINISTRATOR': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    case 'DELETE_ADMINISTRATOR': {
      let newElements = state.elements.slice()
      newElements = newElements.filter(admin => admin._id !== action.payload)
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

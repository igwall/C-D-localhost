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
    default:
      return {
        ...state
      }
  }
}

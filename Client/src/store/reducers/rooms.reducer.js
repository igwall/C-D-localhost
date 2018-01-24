import {defaultRoomsState} from '../store'

export default (state = defaultRoomsState, action) => {
  switch (action.type) {
    case 'FETCH_ROOMS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_ROOMS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        elements: action.payload
      }
    }
    case 'FETCH_ROOMS_ERROR': {
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

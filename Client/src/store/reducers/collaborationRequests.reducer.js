import {defaultCollaborationRequestsState} from '../store'

export default (state = defaultCollaborationRequestsState, action) => {
  switch (action.type) {
    case 'FETCH_COLLABORATION_REQUESTS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_COLLABORATION_REQUESTS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        elements: action.payload
      }
    }
    case 'FETCH_COLLABORATION_REQUESTS_ERROR': {
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

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
    case 'DELETE_COLLABORATION_REQUEST': {
      let newElements = state.elements.slice()
      newElements = newElements.filter(request => request._id !== action.payload)
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

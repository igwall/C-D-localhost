import {defaultCollaboratorsState} from '../store'

export default (state = defaultCollaboratorsState, action) => {
  switch (action.type) {
    case 'FETCH_COLLABORATORS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_COLLABORATORS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        elements: action.payload
      }
    }
    case 'FETCH_COLLABORATORS_ERROR': {
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

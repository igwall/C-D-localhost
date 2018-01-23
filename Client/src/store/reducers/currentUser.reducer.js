import { defaultCurrentUserState } from '../store'

export default (state = defaultCurrentUserState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'UPDATE_USER': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'SET_COLLABORATION_REQUEST': {
      return {
        ...state,
        collaborationRequest: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

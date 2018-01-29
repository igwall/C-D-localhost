import { defaultCurrentAdminState } from '../store'

export default (state = defaultCurrentAdminState, action) => {
  switch (action.type) {
    case 'SET_ADMIN': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'UPDATE_ADMIN': {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

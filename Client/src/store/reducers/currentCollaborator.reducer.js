import { defaultCurrentCollaboratorState } from '../store'

export default (state = defaultCurrentCollaboratorState, action) => {
  switch (action.type) {
    case 'SET_COLLABORATOR': {
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

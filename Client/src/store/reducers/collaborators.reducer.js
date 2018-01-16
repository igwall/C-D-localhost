import {defaultCollaboratorsState} from '../store'

export default (state = defaultCollaboratorsState, action) => {
  switch (action.type) {
    case 'GET_COLLABORATORS_SUCCESS': {
      return {
        ...state.collaborators,
        elements: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

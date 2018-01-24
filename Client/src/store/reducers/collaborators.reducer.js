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
    case 'ADD_COLLABORATOR': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    case 'REMOVE_COLLABORATOR': {
      let newElements = state.elements.slice()
      newElements = newElements.filter(collaborator => collaborator._id !== action.payload)
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

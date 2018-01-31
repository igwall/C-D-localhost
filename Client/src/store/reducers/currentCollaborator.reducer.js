import { defaultCurrentCollaboratorState } from '../store'

export default (state = defaultCurrentCollaboratorState, action) => {
  switch (action.type) {
    case 'SET_COLLABORATOR': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'NEW_RECIPE_REQUEST': {
      let newElements = state.recipes.slice()
      newElements.push(action.payload)
      return {
        ...state,
        recipes: newElements
      }
    }
    default:
      return {
        ...state
      }
  }
}

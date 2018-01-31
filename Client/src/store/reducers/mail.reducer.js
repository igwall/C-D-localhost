import {defaultMailState} from '../store'

export default (state = defaultMailState, action) => {
  switch (action.type) {
    case 'NEW_MATERIAL': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
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

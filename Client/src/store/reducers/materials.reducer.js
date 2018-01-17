import {defaultMaterialsState} from '../store'

export default (state = defaultMaterialsState, action) => {
  switch (action.type) {
    case 'FETCH_MATERIALS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_MATERIALS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        elements: action.payload
      }
    }
    case 'FETCH_MATERIALS_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
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

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
    default:
      return {
        ...state
      }
  }
}

import {defaultHotVideosState} from '../store'

export default (state = defaultHotVideosState, action) => {
  switch (action.type) {
    case 'FETCH_HOTVIDEOS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_HOTVIDEOS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        elements: action.payload
      }
    }
    case 'FETCH_HOTVIDEOS_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'NEW_HOTVIDEO': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    case 'DELETE_HOTVIDEO': {
      let newElements = state.elements.slice()
      newElements = newElements.filter(reference => reference._id !== action.payload)
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

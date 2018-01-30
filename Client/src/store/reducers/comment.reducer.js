import {defaultCommentsState} from '../store'

export default (state = defaultCommentsState, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_COMMENTS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        elements: action.payload
      }
    }
    case 'FETCH_COMMENTS_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'NEW_COMMENTS': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    case 'DELETE_COMMENTS': {
      let newElements = state.elements.slice()
      newElements = newElements.filter(comment => comment._id !== action.payload)
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

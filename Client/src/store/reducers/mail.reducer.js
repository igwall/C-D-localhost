import {defaultMailState} from '../store'

export default (state = defaultMailState, action) => {
  switch (action.type) {
    case 'FETCH_MAILS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_MAILS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        elements: action.payload
      }
    }
    case 'FETCH_MAILS_ERROR': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'NEW_MAIL': {
      let newElements = state.elements.slice()
      newElements.push(action.payload)
      return {
        ...state,
        elements: newElements
      }
    }
    case 'DELETE_MAIL': {
      let newElements = state.elements.slice()
      newElements = newElements.filter(mail => mail._id !== action.payload)
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

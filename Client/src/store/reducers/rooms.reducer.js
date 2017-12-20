import {defaultRoomsState} from '../store'

export default (state = defaultRoomsState, action) => {
  switch (action.type) {
    case 'FETCH_ROOMS_SUCCESS': {
      return {
        ...state.rooms,
        elements: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

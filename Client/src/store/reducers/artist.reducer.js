import {defaultArtistState} from '../store'

export default (state = defaultArtistState, action) => {
  switch (action.type) {
    case 'GET_ARTIST_SUCCESS': {
      return {
        ...state,
        artist: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}

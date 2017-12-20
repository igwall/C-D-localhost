import { fetchRooms } from '../../services/Room.services'

import store from '../store'

export function setRooms (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_ROOMS_START'})
    fetchRooms().then((data) => {
      store.dispatch({
        type: 'FETCH_ROOMS_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_ROOMS_ERROR',
        payload: err
      })
    })
  })
}

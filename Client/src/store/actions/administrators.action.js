import { fetchAdministrators } from '../../services/Administrators.services'

import store from '../store'

export function setAdministrators (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_ADMINISTRATORS_START'})
    fetchAdministrators().then((data) => {
      store.dispatch({
        type: 'FETCH_ADMINISTRATORS_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_ADMINISTRATORS_ERROR',
        payload: err
      })
    })
  })
}

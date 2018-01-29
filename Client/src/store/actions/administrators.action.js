import { fetchAdministrators, deleteAdministratorDistant } from '../../services/Administrators.services'

import store from '../store'

export function setConnectedAdmin (admin) {
  store.dispatch({
    type: 'SET_ADMIN',
    payload: admin
  })
}

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

export function deleteAdministrator (adminId) {
  return new Promise((resolve, reject) => {
    deleteAdministratorDistant(adminId).then((data) => {
      store.dispatch({
        type: 'DELETE_ADMINISTRATOR',
        payload: adminId
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

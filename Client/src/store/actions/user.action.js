import store from '../store'
import { fetchUser } from '../../services/User.services'

export function setConnectedUser (user) {
  store.dispatch({
    type: 'SET_USER',
    payload: user
  })
}

export function setFetchedUser (id) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_USER_PROFILE_START'})
    fetchUser(id).then(user => {
      store.dispatch({
        type: 'FETCH_USER_PROFILE_SUCCESS',
        payload: user
      })
      resolve(user)
    }).catch(err => {
      store.dispatch({
        type: 'FETCH_USER_PROFILE_ERROR',
        payload: err
      })
    })
  })
}

export function updateProfileAction (datas) {
  store.dispatch({
    type: 'UPDATE_USER',
    payload: datas
  })
}

export function updateProfilePageAction (datas) {
  store.dispatch({
    type: 'UPDATE_USER_PROFILE_PAGE',
    payload: datas
  })
}

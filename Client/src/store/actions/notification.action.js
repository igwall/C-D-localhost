import store from '../store.js'

export function removeNotification (index) {
  store.dispatch({
    type: 'REMOVE_NOTIFICATION',
    payload: index
  })
}

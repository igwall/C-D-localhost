import { sendMail } from '../../services/Mail.services'

import store from '../store'

export function addMaterial (name) {
  return new Promise((resolve, reject) => {
    sendMail(name).then((data) => {
      store.dispatch({
        type: 'NEW_MAIL',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

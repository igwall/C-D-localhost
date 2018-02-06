import { sendMail, deleteMailDistant, fetchMails } from '../../services/Contact.services'

import store from '../store'

export function setMails (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_MAILS_START'})
    fetchMails().then((data) => {
      store.dispatch({
        type: 'FETCH_MAILS_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_MAILS_ERROR',
        payload: err
      })
    })
  })
}

export function addMail (mail) {
  return new Promise((resolve, reject) => {
    sendMail(mail).then((data) => {
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

export function deleteMail (mailId) {
  return new Promise((resolve, reject) => {
    deleteMailDistant(mailId).then((data) => {
      store.dispatch({
        type: 'DELETE_MAIL',
        payload: mailId
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

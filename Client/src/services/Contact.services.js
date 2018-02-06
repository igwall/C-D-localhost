import axios from 'axios'
import Config from '../config'

export function sendMail (mail) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/mails`, {
      ...mail
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function fetchMails () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/mails`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteMailDistant (mailId) {
  return new Promise((resolve, reject) => {
    axios.delete(`${Config.API_URL}/mails/${mailId}`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

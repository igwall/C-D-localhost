import axios from 'axios'
import Config from '../config'

export function sendMail (name, email, number, sujet, message) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/mail`, {
      email: email,
      name: name,
      number: number,
      sujet: sujet,
      message: message,
      createdAt: Date.now()
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

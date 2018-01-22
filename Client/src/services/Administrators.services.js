import Config from '../config'
import axios from 'axios'

export function fetchAdministrators () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/admins`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteAdministratorDistant (adminId) {
  return new Promise((resolve, reject) => {
    axios.delete(`${Config.API_URL}/admins/${adminId}`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

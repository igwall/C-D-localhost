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

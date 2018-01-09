import Config from '../config'
import axios from 'axios'

export function fetchUser (id) {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/users/${id}`)
      .then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
  })
}

export function updateProfile (datas) {
  return new Promise((resolve, reject) => {
    axios.put(`${Config.API_URL}/me/`, datas).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

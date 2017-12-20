import Config from '../config'
import axios from 'axios'

export function fetchRooms () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/rooms`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

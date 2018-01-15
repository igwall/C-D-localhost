import Config from '../config'
import axios from 'axios'

export function fetchMaterials () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/materials`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

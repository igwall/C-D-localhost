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

export function addMaterialDistant (name) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/materials`, {
      name: name
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

import Config from '../config'
import axios from 'axios'

export function fetchCollaborators () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/collaborators`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

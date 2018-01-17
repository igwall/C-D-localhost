import Config from '../config'
import axios from 'axios'

export function fetchRecipes () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/recipes`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

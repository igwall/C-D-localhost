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

export function addRecipeDistant (recipe) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/recipes`, {
      ...recipe
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteRecipeDistant (recipeId) {
  return new Promise((resolve, reject) => {
    axios.delete(`${Config.API_URL}/recipes/${recipeId}`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

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
      title: recipe.title,
      description: recipe.description,
      number: recipe.number,
      rooms: recipe.rooms,
      materials: recipe.materials
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

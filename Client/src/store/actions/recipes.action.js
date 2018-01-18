import { fetchRecipes, addRecipeDistant } from '../../services/Recipe.services'

import store from '../store'

export function setRecipes (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_RECIPES_START'})
    fetchRecipes().then((data) => {
      store.dispatch({
        type: 'FETCH_RECIPES_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_RECIPES_ERROR',
        payload: err
      })
    })
  })
}

export function addRecipe (recipe) {
  return new Promise((resolve, reject) => {
    addRecipeDistant(recipe).then((data) => {
      store.dispatch({
        type: 'NEW_RECIPE',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

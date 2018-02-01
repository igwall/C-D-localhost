import { fetchRecipes, addRecipeDistant, deleteRecipeDistant, updateRecipeDistant } from '../../services/Recipe.services'

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

export function addRecipeRequest (recipe) {
  return new Promise((resolve, reject) => {
    addRecipeDistant(recipe).then((data) => {
      store.dispatch({
        type: 'NEW_RECIPE_REQUEST',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function updateRecipe (recipeId, recipe) {
  return new Promise((resolve, reject) => {
    updateRecipeDistant(recipeId, recipe).then((data) => {
      store.dispatch({
        type: 'UPDATE_RECIPE',
        payload: {
          recipeId: recipeId,
          recipe: recipe
        }
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteRecipe (recipeId) {
  return new Promise((resolve, reject) => {
    deleteRecipeDistant(recipeId).then((data) => {
      store.dispatch({
        type: 'DELETE_RECIPE',
        payload: recipeId
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

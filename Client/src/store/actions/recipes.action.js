import { fetchRecipes, fetchRecipe, addRecipeDistant, deleteRecipeDistant } from '../../services/Recipe.services'

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

export function setRecipe (recipeId) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_RECIPE_START'})
    fetchRecipe().then((data) => {
      store.dispatch({
        type: 'FETCH_RECIPE_SUCCESS',
        payload: recipeId
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_RECIPE_ERROR',
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

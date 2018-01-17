import { fetchRecipes } from '../../services/Recipe.services'

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

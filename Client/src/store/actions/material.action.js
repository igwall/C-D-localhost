import { fetchMaterials } from '../../services/Material.services'

import store from '../store'

export function setMaterials (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_MATERIALS_START'})
    fetchMaterials().then((data) => {
      store.dispatch({
        type: 'FETCH_MATERIALS_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_MATERIALS_ERROR',
        payload: err
      })
    })
  })
}

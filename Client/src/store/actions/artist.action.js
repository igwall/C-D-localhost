import { fetchArtist } from '../../services/Artist.services'

import store from '../store'

export function setArtist (id) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_ARTIST_SUCCESS'})
    fetchArtist(id).then((data) => {
      store.dispatch({
        type: 'FETCH_ARTIST_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_ARTIST_ERROR',
        payload: err
      })
    })
  })
}

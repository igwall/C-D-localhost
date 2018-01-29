import { fetchReferences, addReferenceDistant, deleteReferenceDistant, fetchHotVideos, addHotVideoDistant, deleteHotVideoDistant } from '../../services/Library.services'

import store from '../store'

export function setReferences (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_REFERENCES_START'})
    fetchReferences().then((data) => {
      store.dispatch({
        type: 'FETCH_REFERENCES_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_REFERENCES_ERROR',
        payload: err
      })
    })
  })
}

export function addReference (reference) {
  return new Promise((resolve, reject) => {
    addReferenceDistant(reference).then((data) => {
      store.dispatch({
        type: 'NEW_REFERENCE',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteReference (referenceId) {
  return new Promise((resolve, reject) => {
    deleteReferenceDistant(referenceId).then((data) => {
      store.dispatch({
        type: 'DELETE_REFERENCE',
        payload: referenceId
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function setHotVideos (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_HOTVIDEOS_START'})
    fetchHotVideos().then((data) => {
      store.dispatch({
        type: 'FETCH_HOTVIDEOS_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_HOTVIDEOS_ERROR',
        payload: err
      })
    })
  })
}

export function addHotVideo (hotVideo) {
  return new Promise((resolve, reject) => {
    addHotVideoDistant(hotVideo).then((data) => {
      store.dispatch({
        type: 'NEW_HOTVIDEO',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteHotVideo (hotVideoId) {
  return new Promise((resolve, reject) => {
    deleteHotVideoDistant(hotVideoId).then((data) => {
      store.dispatch({
        type: 'DELETE_HOTVIDEO',
        payload: hotVideoId
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

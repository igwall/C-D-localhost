import { createCollaborationRequest, fetchCollaborationRequests, deleteCollaborationRequest } from '../../services/CollaborationRequest.services'

import store from '../store'

export function sendCollaborationRequest (request) {
  return new Promise((resolve, reject) => {
    createCollaborationRequest(request).then((data) => {
      store.dispatch({
        type: 'SET_COLLABORATION_REQUEST',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function setCollaborationRequests () {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_COLLABORATION_REQUESTS_START'})
    fetchCollaborationRequests().then((data) => {
      store.dispatch({
        type: 'FETCH_COLLABORATION_REQUESTS_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_COLLABORATION_REQUESTS_ERROR',
        payload: err
      })
    })
  })
}

export function declineCollaborationRequest (requestId) {
  return new Promise((resolve, reject) => {
    deleteCollaborationRequest(requestId).then((data) => {
      store.dispatch({
        type: 'DELETE_COLLABORATION_REQUEST',
        payload: requestId
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

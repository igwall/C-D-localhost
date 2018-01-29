import { fetchCollaborators, fetchCollaborator, removeUserFromCollaboratorsDistant } from '../../services/Collaborators.services'

import store from '../store'

export function setCollaborators (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_COLLABORATORS_START'})
    fetchCollaborators().then((data) => {
      store.dispatch({
        type: 'FETCH_COLLABORATORS_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_COLLABORATORS_ERROR',
        payload: err
      })
    })
  })
}

export function setCollaborator (collaboratorId) {
  return new Promise((resolve, reject) => {
    fetchCollaborator(collaboratorId).then((data) => {
      store.dispatch({
        type: 'SET_COLLABORATOR',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function removeUserFromCollaborators (collaboratorId) {
  return new Promise((resolve, reject) => {
    removeUserFromCollaboratorsDistant(collaboratorId).then((data) => {
      store.dispatch({
        type: 'REMOVE_COLLABORATOR',
        payload: collaboratorId
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

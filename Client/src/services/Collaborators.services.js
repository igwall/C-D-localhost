import Config from '../config'
import axios from 'axios'

export function fetchCollaborators () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/collaborators`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function fetchCollaborator (collaboratorId) {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/collaborators/${collaboratorId}`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function removeUserFromCollaboratorsDistant (collaboratorId) {
  return new Promise((resolve, reject) => {
    axios.delete(`${Config.API_URL}/collaborators/${collaboratorId}`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

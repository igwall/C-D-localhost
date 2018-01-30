import Config from '../config'
import axios from 'axios'

export function fetchComments () {
  return new Promise((resolve, reject) => {
    axios.get(`${Config.API_URL}/comments`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function addCommentDistant (name, comment, date) {
  return new Promise((resolve, reject) => {
    axios.post(`${Config.API_URL}/comments`, {
      name: name,
      comment: comment,
      date: date
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteCommentDistant (commentId) {
  return new Promise((resolve, reject) => {
    axios.delete(`${Config.API_URL}/comments/${commentId}`).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

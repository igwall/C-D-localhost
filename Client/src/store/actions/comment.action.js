import { fetchComments, addCommentDistant, deleteCommentDistant } from '../../services/Comment.services'

import store from '../store'

export function setComments (dispatch) {
  return new Promise((resolve, reject) => {
    store.dispatch({type: 'FETCH_COMMENTS_START'})
    fetchComments().then((data) => {
      store.dispatch({
        type: 'FETCH_COMMENTS_SUCCESS',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      store.dispatch({
        type: 'FETCH_COMMENTS_ERROR',
        payload: err
      })
    })
  })
}

export function addComment (name, comment, date) {
  return new Promise((resolve, reject) => {
    addCommentDistant(name, comment, date).then((data) => {
      store.dispatch({
        type: 'NEW_COMMENT',
        payload: data
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function deleteComment (commentId) {
  return new Promise((resolve, reject) => {
    deleteCommentDistant(commentId).then((data) => {
      store.dispatch({
        type: 'DELETE_COMMENT',
        payload: commentId
      })
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}

const mongoose = require('mongoose')
const Util = require('./Util')
const Comment = mongoose.model('Comment')
const CommentController = {}

/**
 *
 *
 * @returns
 */
CommentController.getAllComments = function () {
  return new Promise((resolve, reject) => {
    Comment.find().populate('user').exec(function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 *
 *
 * @param {any} commentId
 * @returns
 */
CommentController.getOneComment = function (commentId) {
  return new Promise((resolve, reject) => {
    Comment.findOne({ '_id': commentId }).populate('user').exec(function (err, res) {
      if (err) {
        err.status = 500
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 *
 * @param {any} comment
 * @returns
 */
CommentController.createComment = function (req) {
  console.log(req.body)
  const comment = {...req.body}
  return new Promise((resolve, reject) => {
    const commentToAdd = new Comment(comment)
    commentToAdd.save((err, item) => {
      if (err) {
        reject(err)
      } else {
        resolve(item)
      }
    })
  })
}

/**
 *
 *
 * @param {any} commentId
 * @param {any} user
 * @returns
 */
CommentController.addUserToComment = function (commentId, user) {
  return new Promise((resolve, reject) => {
    Comment.findOneAndUpdate({ '_id': commentId }, { $push: { users: commentId } }, { new: true }, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

CommentController.deleteComment = (commentId) => {
  return new Promise((resolve, reject) => {
    Comment.findOneAndRemove({ '_id': commentId }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = CommentController

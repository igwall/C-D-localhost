const mongoose = require('mongoose')
const Comment = mongoose.model('Comment')
const commentController = {}

/**
 *
 * @param {any} material
 * @returns
 */
commentController.createComment = function (req) {
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

module.exports = commentController

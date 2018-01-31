const mongoose = require('mongoose')
const Comment = mongoose.model('Comment')

module.exports.commentExists = (req, res, next) => {
  Comment.findOne({'_id': req.params.commentId}).exec((err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (result === null) {
      return res.status(404).send('Comment not found')
    }
    next()
  })
}

const mongoose = require('mongoose')
const Room = mongoose.model('Room')

module.exports.roomExists = (req, res, next) => {
  console.log('bleh')
  Room.findOne({'_id': req.params.roomId}).exec((err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (result === null) {
      return res.status(404).send('Board not found')
    }
    next()
  })
}
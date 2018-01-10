const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports.emailNotExists = (req, res, next) => {
  User.findOne({'email': req.body.email}).exec((err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (result !== null) {
      return res.status(409).send('Email already exists')
    }
    next()
  })
}

module.exports.usernameNotExists = (req, res, next) => {
  User.findOne({'username': req.body.username}).exec((err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (result !== null) {
      return res.status(409).send('Username already exists')
    }
    next()
  })
}

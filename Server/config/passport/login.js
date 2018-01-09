const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const secretKey = require('../../config').secretKey

function getUser (email, password) {
  return User
    .findOne({email: email})
    .then(user => {
      return user.authenticate(password) ? user : false
    })
    .catch(err => {
      console.log('getUser - Err: ', err)
    })
}

function generateAccessToken (user) {
  if (user._id) {
    let payload = { userId: user._id }
    let token = jwt.sign(payload, secretKey, { expiresIn: '1h' })
    return token
  }
}

module.exports = {
  generateAccessToken: generateAccessToken,
  getUser: getUser
}

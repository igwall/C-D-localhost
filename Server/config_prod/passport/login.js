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
    let token = jwt.sign(payload, secretKey)
    return token
  }
}

function decodeAccessToken (token) {
  return jwt.verify(token.split(' ')[1], secretKey, function (err, decode) {
    if (err) {
      return undefined
    } else {
      return decode
    }
  })
}

module.exports = {
  generateAccessToken: generateAccessToken,
  decodeAccessToken: decodeAccessToken,
  getUser: getUser
}

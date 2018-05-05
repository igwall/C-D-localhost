const mongoose = require('mongoose')
const Administrator = mongoose.model('Administrator')
const jwt = require('jsonwebtoken')
const secretKey = require('../../config').secretKey

function getAdministrator (username, password) {
  return Administrator
    .findOne({username: username})
    .then(admin => {
      return admin.authenticate(password) ? admin : false
    })
    .catch(err => {
      console.log('getAdmin - Err: ', err)
    })
}

function generateAdminAccessToken (admin) {
  if (admin._id) {
    let payload = { adminId: admin._id }
    let token = jwt.sign(payload, secretKey)
    return token
  }
}

function decodeAdminAccessToken (token) {
  return jwt.verify(token.split(' ')[1], secretKey, function (err, decode) {
    if (err) {
      return undefined
    } else {
      return decode
    }
  })
}

module.exports = {
  generateAdminAccessToken: generateAdminAccessToken,
  decodeAdminAccessToken: decodeAdminAccessToken,
  getAdministrator: getAdministrator
}

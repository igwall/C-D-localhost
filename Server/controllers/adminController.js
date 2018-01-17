const mongoose = require('mongoose')
const Administrator = mongoose.model('Administrator')
const adminController = {}
const passport = require('../config/passport/admin')

adminController.create = (admin) => {
  return new Promise((resolve, reject) => {
    admin.save((err, admin) => {
      if (err) return reject(err) // Error details
      return resolve(admin)
    })
  })
}

adminController.login = (adminToConnect) => {
  return new Promise((resolve, reject) => {
    Administrator.load({
      where: { username: adminToConnect.username },
      select: 'username passwordHash'
    }, (err, admin) => {
      if (err) return reject(new Error('Bad request'))
      if (admin && admin.authenticate(adminToConnect.password)) {
        let token = passport.generateAccessToken(admin)
        return resolve(token)
      } else {
        let error = new Error('Wrong credentials')
        error.status = 403
        return reject(error)
      }
    })
  })
}

module.exports = adminController

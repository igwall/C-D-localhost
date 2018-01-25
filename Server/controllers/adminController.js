const mongoose = require('mongoose')
const Administrator = mongoose.model('Administrator')
const adminController = {}
const passport = require('../config/passport/admin')

adminController.create = (admin) => {
  const username = admin.username.toLowerCase()
  admin.username = username
  return new Promise((resolve, reject) => {
    admin.save((err, admin) => {
      if (err) return reject(err) // Error details
      return resolve(admin)
    })
  })
}

adminController.login = (adminToConnect) => {
  return new Promise((resolve, reject) => {
    const username = adminToConnect.username.toLowerCase()
    adminToConnect.username = username
    Administrator.load({
      where: { username: adminToConnect.username },
      select: 'username passwordHash'
    }, (err, admin) => {
      if (err) return reject(new Error('Bad request'))
      if (admin && admin.authenticate(adminToConnect.password)) {
        let token = passport.generateAdminAccessToken(admin)
        return resolve(token)
      } else {
        let error = new Error('Wrong credentials')
        error.status = 403
        return reject(error)
      }
    })
  })
}

adminController.getAdministrator = (id) => {
  return new Promise((resolve, reject) => {
    Administrator.findOne({ '_id': id }, { 'passwordHash': 0 }).exec(function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

adminController.getAdministrators = () => {
  return new Promise((resolve, reject) => {
    Administrator.find().select('username').exec(function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

adminController.deleteAdministrator = (adminId) => {
  return new Promise((resolve, reject) => {
    Administrator.findOneAndRemove({ '_id': adminId }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = adminController

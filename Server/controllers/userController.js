const mongoose = require('mongoose')
const User = mongoose.model('User')
const passport = require('../config/passport/login')
const userController = {}

userController.create = (user) => {
  return new Promise((resolve, reject) => {
    const email = user.email.toLowerCase()
    user.email = email
    user.provider = 'jwt'
    user.save((err, user) => {
      if (err) return reject(err) // Error details
      return resolve(user)
    })
  })
}

userController.getUsers = (email, limit, skip) => {
  return new Promise((resolve, reject) => {
    User.find({ email: new RegExp(email, 'i') }, { 'passwordHash': 0 }, { skip: skip, limit: limit }).exec(function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

userController.getUser = (id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ '_id': id }, { 'passwordHash': 0 }).populate('collaborationRequest').exec(function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

userController.login = (userToConnect) => {
  return new Promise((resolve, reject) => {
    const email = userToConnect.email.toLowerCase()
    userToConnect.email = email
    User.load({
      where: { email: userToConnect.email },
      select: 'username email passwordHash'
    }, (err, user) => {
      if (err) return reject(new Error('Bad request'))
      if (user && user.authenticate(userToConnect.password)) {
        let token = passport.generateAccessToken(user)
        return resolve(token)
      } else {
        let error = new Error('Wrong credentials')
        error.status = 403
        return reject(error)
      }
    })
  })
}

userController.updateUser = (userId, body) => {
  return new Promise((resolve, reject) => {
    let user = new User(body)
    delete body.email
    if (body.password) {
      body.passwordHash = user.encryptPassword(body.password)
    }
    User.findOneAndUpdate({'_id': userId}, body, { new: true }).exec((err, res) => {
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
 * @param {any} userId
 * @param {any} collaborationRequest
 * @returns
 */
userController.addCollaborationRequestToUser = function (userId, collaborationRequest) {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate({ '_id': userId }, { collaborationRequest: collaborationRequest }, { new: true }, function (err, res) {
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
 * @param {any} userId
 * @returns
 */
userController.removeCollaborationRequestFromUser = function (userId) {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate({ '_id': userId }, { $unset: {collaborationRequest: ''} }, { new: true }, function (err, res) {
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
 * @param {any} userId
 * @param {any} collaborator
 * @returns
 */
userController.addCollaboratorToUser = function (userId, collaborator) {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate({ '_id': userId }, { collaborator: collaborator }, { new: true }, function (err, res) {
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
 * @param {any} userId
 * @returns
 */
userController.removeCollaboratorFromUser = function (userId) {
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate({ '_id': userId }, { $unset: {collaborator: ''} }, { new: true }, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = userController

const mongoose = require('mongoose')
const Util = require('./Util')
const Collaborator = mongoose.model('Collaborator')
const userController = require('./userController')
const collaboratorController = {}

/**
 *
 *
 * @returns
 */
collaboratorController.getAllCollaborators = function () {
  return new Promise((resolve, reject) => {
    Collaborator.find().exec(function (err, res) {
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
 * @param {any} materialId
 * @returns
 */
collaboratorController.getOneMaterial = function (materialId) {
  return new Promise((resolve, reject) => {
    Collaborator.findOne({ '_id': materialId }).populate('recipes').exec(function (err, res) {
      if (err) {
        err.status = 500
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 *
 * @param {any} collaborator
 * @returns
 */
collaboratorController.createCollaborator = function (collaborator) {
  return new Promise((resolve, reject) => {
    const collab = {
      firstname: collaborator.firstname,
      lastname: collaborator.lastname,
      user: collaborator.user
    }
    const collaboratorToAdd = new Collaborator(collab)
    collaboratorToAdd.save((err, item) => {
      if (err) {
        reject(err)
      } else {
        userController.addCollaboratorToUser(item.user, item)
        .then((data) => {
          resolve(item)
        })
      }
    })
  })
}

module.exports = collaboratorController

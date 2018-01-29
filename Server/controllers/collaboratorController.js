const mongoose = require('mongoose')
const Util = require('./Util')
const Collaborator = mongoose.model('Collaborator')
const User = mongoose.model('User')
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
collaboratorController.getOneCollaborator = function (materialId) {
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

collaboratorController.deleteCollaborator = (collaboratorId) => {
  return new Promise((resolve, reject) => {
    Collaborator.findOne({ '_id': collaboratorId }, (err, item) => {
      if (err) {
        reject(err)
      } else {
        User.findOne({ '_id': item.user }, (err, user) => {
          if (err) {
            reject(err)
          } else {
            const collaborationRequestController = require('./collaborationRequestController')
            collaborationRequestController.deleteCollaborationRequest(user.collaborationRequest)
            .then((data) => {
              userController.removeCollaboratorFromUser(item.user)
              .then((data) => {
                Collaborator.findOneAndRemove({ '_id': collaboratorId }, (err, res) => {
                  if (err) {
                    reject(err)
                  } else {
                    resolve(res)
                  }
                })
              }).catch(err => {
                reject(err)
              })
            }).catch(err => {
              reject(err)
            })
          }
        })
      }
    })
  })
}

module.exports = collaboratorController

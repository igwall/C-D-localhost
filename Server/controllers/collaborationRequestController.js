const mongoose = require('mongoose')
const Util = require('./Util')
const CollaborationRequest = mongoose.model('CollaborationRequest')
const userController = require('./userController')
const collaborationRequestController = {}

/**
 *
 *
 * @returns
 */
collaborationRequestController.getAllCollaborationRequests = function () {
  return new Promise((resolve, reject) => {
    CollaborationRequest.find().populate('user').exec(function (err, res) {
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
collaborationRequestController.getOneMaterial = function (materialId) {
  return new Promise((resolve, reject) => {
    CollaborationRequest.findOne({ '_id': materialId }).populate('recipes').exec(function (err, res) {
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
 * @param {any} material
 * @returns
 */
collaborationRequestController.createCollaborationRequest = function (req) {
  const collaborationRequest = {...req.body}
  return new Promise((resolve, reject) => {
    const requestToAdd = new CollaborationRequest(collaborationRequest)
    requestToAdd.save((err, item) => {
      if (err) {
        reject(err)
      } else {
        userController.addCollaborationRequestToUser(item.user, item)
        .then((data) => {
          resolve(item)
        })
      }
    })
  })
}

collaborationRequestController.deleteCollaborationRequest = (requestId) => {
  return new Promise((resolve, reject) => {
    CollaborationRequest.findOneAndRemove({ '_id': requestId }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = collaborationRequestController

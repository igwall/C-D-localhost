const mongoose = require('mongoose')
const Util = require('./Util')
const Reference = mongoose.model('Reference')
// const libraryController = require('./libraryController')
const referenceController = {}

/**
 *
 *
 * @returns
 */
referenceController.getAllReferences = function () {
  return new Promise((resolve, reject) => {
    Reference.find().exec(function (err, res) {
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
 * @param {any} reference
 * @returns
 */
referenceController.createReference = function (reference) {
  return new Promise((resolve, reject) => {
    const referenceToAdd = new Reference(reference)
    referenceToAdd.save((err, item) => {
      if (err) {
        reject(err)
      } else {
        resolve(item)
      }
    })
  })
}

/**
 *
 * @param {any} referenceId
 * @param {any} body
 * @returns
 */
referenceController.updateReference = (referenceId, body) => {
  return new Promise((resolve, reject) => {
    Reference.findOneAndUpdate({'_id': referenceId}, body, { new: true }).exec((err, res) => {
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
 * @param {any} referenceId
 * @returns
 */
referenceController.deleteReference = (referenceId) => {
  return new Promise((resolve, reject) => {
    Reference.findOneAndRemove({ '_id': referenceId }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = referenceController

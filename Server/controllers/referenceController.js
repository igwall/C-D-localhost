const mongoose = require('mongoose')
const Util = require('./Util')
const Reference = mongoose.model('Reference')
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
 * @param {any} quote
 * @returns
 */
referenceController.createReference = function (quote) {
  return new Promise((resolve, reject) => {
    const quoteToAdd = new Reference(quote)
    quoteToAdd.save((err, item) => {
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

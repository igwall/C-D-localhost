const mongoose = require('mongoose')
const Util = require('./Util')
const Text = mongoose.model('Text')
const textController = {}

/**
 *
 *
 * @returns
 */
textController.getAllTexts = function () {
  return new Promise((resolve, reject) => {
    Text.find().exec(function (err, res) {
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
 * @param {any} textId
 * @returns
 */
textController.getOneText = function (textId) {
  return new Promise((resolve, reject) => {
    Text.findOne({ '_id': textId }).exec(function (err, res) {
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
 *
 * @param {any} textIdentifier
 * @returns
 */
textController.getOneTextByIdentifier = function (textIdentifier) {
  return new Promise((resolve, reject) => {
    Text.findOne({ 'identifier': textIdentifier }).exec(function (err, res) {
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
 * @param {any} text
 * @returns
 */
textController.createText = function (text) {
  return new Promise((resolve, reject) => {
    const textToAdd = new Text(text)
    textToAdd.save((err, item) => {
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
 * @param {any} textId
 * @param {any} body
 * @returns
 */
textController.updateUser = (textId, body) => {
  return new Promise((resolve, reject) => {
    Text.findOneAndUpdate({'_id': textId}, body, { new: true }).exec((err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = textController

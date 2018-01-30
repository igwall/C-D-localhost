const mongoose = require('mongoose')
const Util = require('./Util')
const Mail = mongoose.model('Mail')
// const libraryController = require('./libraryController')
const mailController = {}

/**
 *
 *
 * @returns
 */
mailController.getAllmails = function () {
  return new Promise((resolve, reject) => {
    Mail.find().exec(function (err, res) {
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
 * @param {any} hotVideo
 * @returns
 */
mailController.createMail = function (mail) {
  return new Promise((resolve, reject) => {
    const mailToAdd = new Mail(mail)
    mailToAdd.save((err, item) => {
      if (err) {
        reject(err)
      } else {
        resolve(item)
      }
    })
  })
}

module.exports = mailController

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
mailController.getAllMails = function () {
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
 * @param {any} mail
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

/**
 *
 * @param {any} mailId
 * @returns
 */
mailController.deleteMail = (mailId) => {
  return new Promise((resolve, reject) => {
    Mail.findOneAndRemove({ '_id': mailId }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = mailController

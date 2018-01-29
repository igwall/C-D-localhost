const mongoose = require('mongoose')
const Util = require('./Util')
const Quote = mongoose.model('Quote')
const quoteController = {}

/**
 *
 *
 * @returns
 */
quoteController.getAllQuotes = function () {
  return new Promise((resolve, reject) => {
    Quote.find().exec(function (err, res) {
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
quoteController.createQuote = function (quote) {
  return new Promise((resolve, reject) => {
    const quoteToAdd = new Quote(quote)
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
 * @param {any} quoteId
 * @param {any} body
 * @returns
 */
quoteController.updateQuote = (quoteId, body) => {
  return new Promise((resolve, reject) => {
    Quote.findOneAndUpdate({'_id': quoteId}, body, { new: true }).exec((err, res) => {
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
 * @param {any} quoteId
 * @returns
 */
quoteController.deleteQuote = (quoteId) => {
  return new Promise((resolve, reject) => {
    Quote.findOneAndRemove({ '_id': quoteId }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = quoteController

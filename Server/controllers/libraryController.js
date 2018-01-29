const mongoose = require('mongoose')
const Library = mongoose.model('Library')
const libraryController = {}

/**
 *
 * @param {any} library
 * @returns
 */
libraryController.createLibrary = function (text) {
  return new Promise((resolve, reject) => {
    const libraryToAdd = new Library(text)
    libraryToAdd.save((err, item) => {
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
 * @param {any} libraryId
 * @param {any} body
 * @returns
 */
libraryController.updateLibrary = (libraryId, body) => {
  return new Promise((resolve, reject) => {
    Library.findOneAndUpdate({'_id': libraryId}, body, { new: true }).exec((err, res) => {
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
 * @param {any} libraryId
 * @param {any} video
 * @returns
 */
libraryController.addVideoToLibrary = function (libraryId, video) {
  return new Promise((resolve, reject) => {
    Library.findOneAndUpdate({ '_id': libraryId }, { $push: { videos: video } }, { new: true }, function (err, res) {
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
 * @param {any} libraryId
 * @param {any} reference
 * @returns
 */
libraryController.addReferenceToLibrary = function (libraryId, reference) {
  return new Promise((resolve, reject) => {
    Library.findOneAndUpdate({ '_id': libraryId }, { $push: { references: reference } }, { new: true }, function (err, res) {
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
 * @param {any} libraryId
 * @param {any} videoId
 * @returns
 */
libraryController.removeVideoFromLibrary = function (libraryId, videoId) {
  return new Promise((resolve, reject) => {
    Library.findOneAndUpdate({ '_id': libraryId }, { $pull: {videos: videoId} }, { new: true }, function (err, res) {
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
 * @param {any} libraryId
 * @param {any} referenceId
 * @returns
 */
libraryController.removeVideoFromLibrary = function (libraryId, referenceId) {
  return new Promise((resolve, reject) => {
    Library.findOneAndUpdate({ '_id': libraryId }, { $pull: {references: referenceId} }, { new: true }, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = libraryController

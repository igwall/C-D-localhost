const mongoose = require('mongoose')
const Util = require('./Util')
const HotVideo = mongoose.model('HotVideo')
// const libraryController = require('./libraryController')
const hotVideoController = {}

/**
 *
 *
 * @returns
 */
hotVideoController.getAllHotVideos = function () {
  return new Promise((resolve, reject) => {
    HotVideo.find().exec(function (err, res) {
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
hotVideoController.createHotVideo = function (hotVideo) {
  return new Promise((resolve, reject) => {
    const hotVideoToAdd = new HotVideo(hotVideo)
    hotVideoToAdd.save((err, item) => {
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
 * @param {any} hotVideoId
 * @returns
 */
hotVideoController.deleteHotVideo = (hotVideoId) => {
  return new Promise((resolve, reject) => {
    console.log(hotVideoId)
    HotVideo.findOneAndRemove({ '_id': hotVideoId }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

module.exports = hotVideoController

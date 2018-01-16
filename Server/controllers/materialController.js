const mongoose = require('mongoose')
const Util = require('./Util')
const Material = mongoose.model('Material')
const roomController = require('./roomController')
const materialController = {}

/**
 *
 *
 * @returns
 */
materialController.getAllMaterials = function () {
  return new Promise((resolve, reject) => {
    Material.find().populate('recipes').exec(function (err, res) {
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
materialController.getOneMaterial = function (materialId) {
  return new Promise((resolve, reject) => {
    Material.findOne({ '_id': materialId }).populate('recipes').exec(function (err, res) {
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
materialController.createMaterial = function (req) {
  const material = {...req.body}
  return new Promise((resolve, reject) => {
    const materialToAdd = new Material(material)
    materialToAdd.save((err, item) => {
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
 *
 * @param {any} materialId
 * @param {any} recipe
 * @returns
 */
materialController.addRecipeToMaterial = function (materialId, recipe) {
  return new Promise((resolve, reject) => {
    Material.findOneAndUpdate({ '_id': materialId }, { $push: { recipes: recipe } }, { new: true }, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = materialController
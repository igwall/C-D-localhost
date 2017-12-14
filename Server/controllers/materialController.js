const mongoose = require('mongoose')
const Util = require('./Util')
const Material = mongoose.model('Material')
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
materialController.createMaterial = function (material) {
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

module.exports = materialController
const mongoose = require('mongoose')
const Util = require('./Util')
const Recipe = mongoose.model('Recipe')
const User = mongoose.model('User')
const materialController = require('./materialController')
const roomController = require('./roomController')
const recipeController = {}

/**
 *
 *
 * @returns
 */
recipeController.getAllRecipes = function () {
  return new Promise((resolve, reject) => {
    Recipe.find().populate('author materials rooms').exec(function (err, res) {
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
 * @param {any} recipeId
 * @returns
 */
recipeController.getOneRecipe = function (recipeId) {
  return new Promise((resolve, reject) => {
    Recipe.findOne({ '_id': recipeId }).populate('author').exec(function (err, res) {
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
 * @param {any} recipe
 * @returns
 */
recipeController.createRecipe = function (req) {
  const recipe = {
    ...req.body,
    materials: req.body.materials.split(','),
    rooms: req.body.rooms.split(',')
  }
  const materials = req.body.materials.split(',')
  const rooms = req.body.rooms.split(',')
  return new Promise((resolve, reject) => {
    const recipeToAdd = new Recipe(recipe)
    recipeToAdd.save((err, item) => {
      if (err) {
        reject(err)
      } else {
        materials.map(materialId => {
          materialController.addRecipeToMaterial(materialId, recipeToAdd)
          .then((data) => {
            rooms.map(roomId => {
              roomController.addRecipeToRoom(roomId, recipeToAdd)
              .then((data) => {
                Recipe.findOne({ '_id': item._id }).populate('rooms materials author').exec(function (err, res) {
                  if (err) {
                    err.status = 500
                    reject(err)
                  } else {
                    resolve(res)
                  }
                })
              })
              .catch((err) => {
                reject(err)
              })
            })
          })
          .catch((err) => {
            reject(err)
          })
        })
      }
    })
  })
}

recipeController.deleteRecipe = (recipeId) => {
  return new Promise((resolve, reject) => {
    Recipe.findOneAndRemove({ '_id': recipeId }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = recipeController

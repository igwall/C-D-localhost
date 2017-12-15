const mongoose = require('mongoose')
const Util = require('./Util')
const Recipe = mongoose.model('Recipe')
const User = mongoose.model('User')
const materialController = require('./materialController')
const recipeController = {}

/**
 *
 *
 * @returns
 */
recipeController.getAllRecipes = function () {
  return new Promise((resolve, reject) => {
    Recipe.find().populate('author').exec(function (err, res) {
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
  const recipe = {...req.body}
  return new Promise((resolve, reject) => {
    const recipeToAdd = new Recipe(recipe)
    recipeToAdd.save((err, item) => {
      if (err) {
        reject(err)
      } else {
        materialController.addRecipeToMaterial(req.params.materialId, recipeToAdd)
        .then((data) => {
          resolve(item)
        })
        .catch((err) => {
          reject(err)
        })
      }
    })
  })
}

module.exports = recipeController
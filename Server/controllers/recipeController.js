const mongoose = require('mongoose')
const Util = require('./Util')
const Recipe = mongoose.model('Recipe')
const User = mongoose.model('User')
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
recipeController.createRecipe = function (recipe) {
  return new Promise((resolve, reject) => {
    const recipeToAdd = new Recipe(recipe)
    recipeToAdd.save((err, item) => {
      if (err) {
        reject(err)
      } else {
        resolve(item)
      }
    })
  })
}

module.exports = recipeController
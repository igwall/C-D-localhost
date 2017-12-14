const mongoose = require('mongoose')
const Recipe = mongoose.model('Recipe')

module.exports.recipeExists = (req, res, next) => {
  Recipe.findOne({'_id': req.params.recipeId}).exec((err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (result === null) {
      return res.status(404).send('Recipe not found')
    }
    next()
  })
}
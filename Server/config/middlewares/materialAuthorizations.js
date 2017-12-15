const mongoose = require('mongoose')
const Material = mongoose.model('Material')

module.exports.materialExists = (req, res, next) => {
  Material.findOne({'_id': req.params.materialId}).exec((err, result) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (result === null) {
      return res.status(404).send('Material not found')
    }
    next()
  })
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReferenceSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, default: ''},
  link: {type: String, default: '', required: true}
})
mongoose.model('Reference', ReferenceSchema)

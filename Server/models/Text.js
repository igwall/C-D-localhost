const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TextSchema = new Schema({
  identifier: {type: String, required: true},
  title: {type: String, default: '', required: true},
  text: {type: String, default: '', required: true}
})
mongoose.model('Text', TextSchema)

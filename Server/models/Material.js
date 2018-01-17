const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MaterialSchema = new Schema({
  name: {type: String, default: '', required: true, unique: true},
  recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
  picture: {type: String, default: ''}
})
mongoose.model('Material', MaterialSchema)

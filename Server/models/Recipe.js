const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  title: {type: String, default: '', required: true},
  description: {type: String, default: ''},
  statement: {type: String, default: '', required: true},
  pictures: [{type: String, default: ''}],
  videos: [{type: String, default: ''}],
  audios: [{type: String, default: ''}],
  duration: {type: Number, default: ''},
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: {type: Date, default: Date.now},
  material: {type: Schema.Types.ObjectId, ref: 'Material'}
})
mongoose.model('Recipe', RecipeSchema)

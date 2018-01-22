const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  title: {type: String, default: '', required: true},
  thumbnail: {type: String, default: ''},
  description: {type: String, default: '', required: true},
  statement: {type: String, default: '', required: true},
  pictures: [{type: String, default: ''}],
  videos: [{type: String, default: ''}],
  audios: [{type: String, default: ''}],
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: {type: Date, default: Date.now},
  materials: [{type: Schema.Types.ObjectId, ref: 'Material'}],
  rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}],
  number: {type: String, enum: ['solo', 'duo', 'trio', 'quatuor', 'quintuor', 'more']}
})
mongoose.model('Recipe', RecipeSchema)

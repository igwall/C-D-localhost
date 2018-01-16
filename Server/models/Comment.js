const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  message: {type: String, required: true},
  recipe: {type: Schema.Types.ObjectId, ref: 'Recipe', required: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: ''},
  updatedBy: {type: Schema.Types.ObjectId, ref: 'User'}
})
mongoose.model('Comment', CommentSchema)

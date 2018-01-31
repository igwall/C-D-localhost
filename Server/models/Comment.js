const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  createdAt: {type: Date, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  text: {type: String, required: true}
})
mongoose.model('Comment', CommentSchema)

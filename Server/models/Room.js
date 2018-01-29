const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
  name: {type: String, default: '', required: true},
  recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
})
mongoose.model('Room', RoomSchema)

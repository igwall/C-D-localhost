const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
  name: {type: String, default: '', required: true},
  materials: [{type: Schema.Types.ObjectId, ref: 'Material'}],
  color: {type: String, default: '#999'},
})
mongoose.model('Room', RoomSchema)
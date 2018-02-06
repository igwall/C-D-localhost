const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  title: {type: String, default: '', required: true},
  thumbnail: {type: String, default: '/assets/imgs/imgDefault.png'},
  description: {type: String, default: '', required: true},
  statement: {type: String, default: '', required: true},
  pictures: [{type: String, default: ''}],
  videos: [{type: String, default: ''}],
  audios: [{type: String, default: ''}],
  collaborator: {type: Schema.Types.ObjectId, ref: 'Collaborator'},
  createdAt: {type: Date, default: Date.now},
  materials: [{type: Schema.Types.ObjectId, ref: 'Material'}],
  rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}],
  number: {type: String, enum: ['solo', 'duo', 'trio', 'quatuor', 'quintette', 'more']},
  validated: {type: Boolean, default: false}
})
mongoose.model('Recipe', RecipeSchema)

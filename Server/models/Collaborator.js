const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollaboratorSchema = new Schema({
  firstname: {type: String, default: '', required: true},
  lastname: {type: String, default: '', required: true},
  bio: {type: String, default: ''},
  description: {type: String, default: ''},
  link: {type: String, default: ''},
  picture: {type: String, default: '/assets/imgs/avatarDefault.png'},
  video: {type: String, default: ''},
  recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})
mongoose.model('Collaborator', CollaboratorSchema)

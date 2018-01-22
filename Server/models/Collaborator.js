const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollaboratorSchema = new Schema({
  firstname: {type: String, default: '', required: true},
  lastname: {type: String, default: '', required: true},
  description: {type: String, default: ''},
  video: {type: String, default: ''},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})
mongoose.model('Collaborator', CollaboratorSchema)

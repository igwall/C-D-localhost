const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {type: String, default: '', required: true},
  email: {type: String, default: '', required: true},
  password: {type: String, default: '', required: true},
  picture: {type: String, default: ''},
  age: {type: Number, default: ''},
  collaborator: {type: Schema.Types.ObjectId, ref: 'Collaborator'},
  realisations: [{type: Schema.Types.ObjectId, ref: 'Realisation'}],
})
mongoose.model('User', UserSchema)
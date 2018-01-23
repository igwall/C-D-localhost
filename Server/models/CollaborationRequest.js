const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollaborationRequestSchema = new Schema({
  firstname: {type: String, default: '', required: true},
  lastname: {type: String, default: '', required: true},
  motivation: {type: String, default: '', required: true},
  validated: {type: Boolean, default: false},
  createdAt: {type: Date, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})
mongoose.model('CollaborationRequest', CollaborationRequestSchema)

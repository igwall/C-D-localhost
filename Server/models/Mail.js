const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MailSchema = new Schema({
  email: {type: String, default: '', required: true},
  name: {type: String, default: '', required: true},
  number: {type: String, default: ''},
  sujet: {type: String, default: '', required: true},
  message: {type: String, default: '', required: true}
})
mongoose.model('Mail', MailSchema)

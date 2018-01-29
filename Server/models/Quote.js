const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema({
  author: {type: String, required: true},
  text: {type: String, default: '', required: true}
})
mongoose.model('Quote', QuoteSchema)

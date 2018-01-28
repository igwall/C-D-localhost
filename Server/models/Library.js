const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibrarySchema = new Schema({
  description: {type: String, required: true},
  collaboration: {type: String, default: '', required: true},
  demarche: {type: String, default: '', required: true},
  enCeMoment: [{type: Schema.Types.ObjectId, ref: 'Video'}]
})
mongoose.model('Library', LibrarySchema)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibrarySchema = new Schema({
  references: [{type: Schema.Types.ObjectId, ref: 'Reference'}],
  videos: [{type: Schema.Types.ObjectId, ref: 'Video'}]
})
mongoose.model('Library', LibrarySchema)

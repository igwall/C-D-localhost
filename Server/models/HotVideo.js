const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HotVideoSchema = new Schema({
  title: {type: String, required: true},
  youtube_link: {type: String, default: '', required: true}
})
mongoose.model('HotVideo', HotVideoSchema)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoSchema = new Schema({
  title: {type: String, required: true},
  youtube_link: {type: String, default: '', required: true}
})
mongoose.model('Video', VideoSchema)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RealisationSchema = new Schema({
  recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'},
  doneAt: {type: Date, default: Date.now}
})
mongoose.model('Realisation', RealisationSchema)

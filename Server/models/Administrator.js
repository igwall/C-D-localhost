const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const AdministratorSchema = new Schema({
  username: {type: String, default: '', required: true},
  passwordHash: {type: String, default: '', required: true},
  role: {type: String, default: 'moderator', enum: ['moderator', 'administrator']}
})

AdministratorSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.passwordHash = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })

AdministratorSchema.methods = {

  /**
   * Authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   */

  authenticate: function (plainText) {
    return bcrypt.compareSync(plainText, this.passwordHash)
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String}
   * @api public
   */

  encryptPassword: function (password) {
    if (!password) return ''
    try {
      return bcrypt.hashSync(password)
    } catch (err) {
      return ''
    }
  }
}

/**
 * Statics
 */

AdministratorSchema.statics = {

  /**
   * Load
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */

  load: function (options, cb) {
    options.select = options.select || 'username'
    return this.findOne(options.where)
      .select(options.select)
      .exec(cb)
  }
}

mongoose.model('Administrator', AdministratorSchema)

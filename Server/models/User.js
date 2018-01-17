const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {type: String, default: '', required: true},
  email: {type: String, default: '', required: true},
  passwordHash: {type: String, default: ''},
  picture: {type: String, default: ''},
  age: {type: Number, default: ''},
  collaborator: {type: Schema.Types.ObjectId, ref: 'Collaborator'},
  realisations: [{type: Schema.Types.ObjectId, ref: 'Realisation'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

const validatePresenceOf = value => value && value.length

UserSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.passwordHash = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })

/**
 * Validations
 */

UserSchema.path('username').validate(function (name) {
  return name.length > 0
}, 'Name cannot be blank')

UserSchema.path('email').validate(function (email) {
  return email.length > 0
}, 'Email cannot be blank')

/* UserSchema.path('email').validate(function (email) {
  const User = mongoose.model('User')
  User.find({email: email}).exec((user) => {
    if (user) {
    } else {
      return true
    }
  })
}, 'Email already exists') */

UserSchema.path('username').validate(function (username) {
  return username.length > 0
}, 'Username cannot be blank')

UserSchema.path('passwordHash').validate(function (passwordHash) {
  return passwordHash.length && this._password.length
}, 'Password cannot be blank')

/**
 * Pre-save hook
 */

UserSchema.pre('save', function (next) {
  if (!this.isNew) return next()

  if (!validatePresenceOf(this.password)) {
    next(new Error('Invalid password'))
  } else {
    next()
  }
})

/**
 * Methods
 */

UserSchema.methods = {

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

UserSchema.statics = {

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

mongoose.model('User', UserSchema)

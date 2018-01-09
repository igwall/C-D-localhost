const passport = require('../../config/passport/login')

exports.requiresLogin = (req, res, next) => {
  passport.authenticate(req, res)
    .then(function (token) {
      // Request is authorized.
      next()
    })
    .catch(function (err) {
      // Request is not authorized.
      res.status(err.code || 500).json(err)
    })
}

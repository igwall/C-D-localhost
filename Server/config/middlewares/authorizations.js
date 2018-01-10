const passport = require('../passport/login')

exports.requiresLogin = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    const token = req.headers.authorization
    const decodedToken = passport.decodeAccessToken(token)
    if (decodedToken !== undefined) {
      req.userId = decodedToken.userId
      next()
    } else {
      res.status(500).json(('Wrong token'))
    }
  } else {
    res.status(500).json(('Non authorized'))
  }
}

const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.all('/me/*', (req, res, next) => {
  let request = req.originalUrl.split('/').filter(e => e !== '')
  request[0] = `/users/${req.user._id}`
  request = request.join('/')
  req.url = request
  next()
})

router.get('/', (req, res) => {
  res.redirect('/api-docs')
})

module.exports = router
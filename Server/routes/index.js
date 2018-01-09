const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.all('/me/*', (req, res, next) => {
  let request = req.originalUrl.split('/').filter(e => e !== '')
  console.log(req)
  request[0] = `/users/${req.user._id}`
  request = request.join('/')
  req.url = request
  next()
})

router.post('/rooms/*', (req, res, next) => {
  next()
})

router.get(['/rooms', '/rooms/*'], (req, res, next) => {
  next()
})

router.post('/materials/*', (req, res, next) => {
  next()
})

router.get(['/materials', '/materials/*'], (req, res, next) => {
  next()
})

router.post('/recipes/*', (req, res, next) => {
  next()
})

router.get(['/recipes', '/recipes/*'], (req, res, next) => {
  next()
})

require('./Room')(router, controllers.roomController)
require('./Material')(router, controllers.materialController)
require('./Recipe')(router, controllers.recipeController)
require('./User')(router, controllers.userController)

router.get('/', (req, res) => {
  res.redirect('/api-docs')
})

module.exports = router

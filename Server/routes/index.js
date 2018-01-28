const express = require('express')
const router = express.Router()
const { requiresLogin, requiresAdminLogin } = require('../config/middlewares/authorizations')
const controllers = require('../controllers')

router.all('/me/*', [requiresLogin], (req, res, next) => {
  let request = req.originalUrl.split('/').filter(e => e !== '')
  request[0] = `/users/${req.userId}`
  request = request.join('/')
  req.url = request
  next()
})

router.all('/admins/me/*', [requiresAdminLogin], (req, res, next) => {
  let request = req.originalUrl.split('/').filter(e => e !== '')
  request[0] = `/admins`
  request[1] = `${req.adminId}`
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
require('./Administrator')(router, controllers.adminController)
require('./CollaborationRequest')(router, controllers.collaborationRequestController)
require('./Collaborator')(router, controllers.collaboratorController)
require('./Quote')(router, controllers.quoteController)
require('./Reference')(router, controllers.referenceController)

router.get('/', (req, res) => {
  res.redirect('/api-docs')
})

module.exports = router

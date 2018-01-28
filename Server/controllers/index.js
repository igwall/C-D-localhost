const roomController = require('./roomController')
const recipeController = require('./recipeController')
const materialController = require('./materialController')
const userController = require('./userController')
const adminController = require('./adminController')
const collaborationRequestController = require('./collaborationRequestController')
const collaboratorController = require('./collaboratorController')
const quoteController = require('./quoteController')

module.exports = {
  roomController: roomController,
  recipeController: recipeController,
  materialController: materialController,
  userController: userController,
  adminController: adminController,
  collaborationRequestController: collaborationRequestController,
  collaboratorController: collaboratorController,
  quoteController: quoteController
}

const roomController = require('./roomController')
const recipeController = require('./recipeController')
const materialController = require('./materialController')
const userController = require('./userController')
const adminController = require('./adminController')
const collaborationRequestController = require('./collaborationRequestController')

module.exports = {
  roomController: roomController,
  recipeController: recipeController,
  materialController: materialController,
  userController: userController,
  adminController: adminController,
  collaborationRequestController: collaborationRequestController
}

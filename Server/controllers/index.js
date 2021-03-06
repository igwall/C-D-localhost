const roomController = require('./roomController')
const recipeController = require('./recipeController')
const materialController = require('./materialController')
const userController = require('./userController')
const adminController = require('./adminController')
const collaborationRequestController = require('./collaborationRequestController')
const collaboratorController = require('./collaboratorController')
const quoteController = require('./quoteController')
const referenceController = require('./referenceController')
const hotVideoController = require('./hotVideoController')
const mailController = require('./mailController')
const commentController = require('./commentController')

module.exports = {
  roomController: roomController,
  recipeController: recipeController,
  materialController: materialController,
  userController: userController,
  adminController: adminController,
  collaborationRequestController: collaborationRequestController,
  collaboratorController: collaboratorController,
  quoteController: quoteController,
  referenceController: referenceController,
  hotVideoController: hotVideoController,
  mailController: mailController,
  commentController: commentController
}

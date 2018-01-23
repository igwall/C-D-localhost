module.exports = function (router, controller) {
  /**
   * @swagger
   * definitions:
   *   CollaborationRequest:
   *     properties:
   *       firstname:
   *         type: string
   *       lastname:
   *         type: string
   *       motivation:
   *         type: string
   *       user:
   *         type: string
   */

  require('./create')(router, controller)
  require('./getAll')(router, controller)
  // require('./accept')(router, controller)
  require('./delete')(router, controller)
}

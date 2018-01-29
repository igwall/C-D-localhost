  /**
   * @swagger
   * definitions:
   *   Collaborator:
   *     properties:
   *       firstname:
   *         type: string
   *       lastname:
   *         type: string
   *       description:
   *         type: string
   */

module.exports = function (router, controller) {
  require('./getAll')(router, controller)
  require('./delete')(router, controller)
}

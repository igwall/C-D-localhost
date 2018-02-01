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
   *       bio:
   *         type: string
   *       link:
   *         type: string
   *       video:
   *         type: string
   */

module.exports = function (router, controller) {
  require('./getAll')(router, controller)
  require('./getOne')(router, controller)
  require('./delete')(router, controller)
  require('./update')(router, controller)
}

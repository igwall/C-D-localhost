module.exports = function (router, controller) {
  /**
   * @swagger
   * definitions:
   *   Material:
   *     properties:
   *       name:
   *         type: string
   *       picture:
   *         type: string
   */

  require('./create')(router, controller)
  require('./getAll')(router, controller)
  require('./getOne')(router, controller)
  require('./delete')(router, controller)
}

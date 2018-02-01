module.exports = function (router, controller) {
  /**
   * @swagger
   * definitions:
   *   Recipe:
   *     properties:
   *       title:
   *         type: string
   *       description:
   *         type: string
   *       statement:
   *         type: string
   *       number:
   *         type: integer
   */

  require('./create')(router, controller)
  require('./getAll')(router, controller)
  require('./getOne')(router, controller)
  require('./delete')(router, controller)
  require('./update')(router, controller)
}

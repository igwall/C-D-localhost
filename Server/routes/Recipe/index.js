module.exports = function (router, controller) {
  /**
   * @swagger
   * definitions:
   *   Recipe:
   *     properties:
   *       name:
   *         type: string
   *       description:
   *         type: string
   *       statement:
   *         type: string
   *       duration:
   *         type: integer
   */

  require('./create')(router, controller)
  require('./getAll')(router, controller)
  require('./getOne')(router, controller)
  require('./delete')(router, controller)
}

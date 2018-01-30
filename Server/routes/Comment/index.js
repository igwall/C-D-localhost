module.exports = function (router, controller) {
  /**
   * @swagger
   * definitions:
   *   Comment:
   *     properties:
   *       text:
   *         type: string
   */

  require('./create')(router, controller)
  require('./getAll')(router, controller)
  require('./getOne')(router, controller)
  require('./delete')(router, controller)
}

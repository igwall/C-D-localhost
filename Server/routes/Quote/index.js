module.exports = function (router, controller) {
  /**
   * @swagger
   * definitions:
   *   Quote:
   *     properties:
   *       author:
   *         type: string
   *       text:
   *         type: string
   */

  require('./create')(router, controller)
  require('./delete')(router, controller)
  require('./update')(router, controller)
  require('./getAll')(router, controller)
}

module.exports = function (router, controller) {
  /**
   * @swagger
   * definitions:
   *   Reference:
   *     properties:
   *       title:
   *         type: string
   *       description:
   *         type: string
   *       link:
   *         type: string
   */

  require('./create')(router, controller)
  require('./delete')(router, controller)
  require('./update')(router, controller)
}

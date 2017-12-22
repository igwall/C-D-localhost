module.exports = function (router, controller) {
  /**
   * @swagger
   * definitions:
   *   Comment:
   *     properties:
   *       message:
   *         type: string
   */

  require('./create')(router, controller)
}

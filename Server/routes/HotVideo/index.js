module.exports = function (router, controller) {
  /**
   * @swagger
   * definitions:
   *   HotVideo:
   *     properties:
   *       title:
   *         type: string
   *       youtube_link:
   *         type: string
   */

  require('./create')(router, controller)
  require('./delete')(router, controller)
  require('./getAll')(router, controller)
}

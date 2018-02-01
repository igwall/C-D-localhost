  module.exports = function (router, controller) {
        /**
   * @swagger
   * definitions:
   *   Mail:
   *     properties:
   *       email:
   *         type: string
   *       name:
   *         type: string
   *       number:
   *         type: string
   *       sujet:
   *         type: string
   *       message:
   *         type: string
   */

    require('./create')(router, controller)
  }
  
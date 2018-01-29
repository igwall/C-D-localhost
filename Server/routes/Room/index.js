module.exports = function (router, controller) {
/**
 * @swagger
 * definitions:
 *   Room:
 *     properties:
 *       name:
 *         type: string
 */

  require('./create')(router, controller)
  require('./getAll')(router, controller)
  require('./getOne')(router, controller)
}

const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = function (router, controller) {
  /**
  * @swagger
  * /collaboration:
  *   get:
  *     tags:
  *       - Collaboration Requests
  *     description: Get all collaboration requests
  *     summary: GET ALL Collaboration Requests
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of Collaboration Requests
  *         schema:
  *           $ref: '#/definitions/CollaborationRequest'
  *       500:
  *         description: Internal error
  */
  router.get('/collaboration', [requiresAdminLogin], function (req, res) {
    controller.getAllCollaborationRequests().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}

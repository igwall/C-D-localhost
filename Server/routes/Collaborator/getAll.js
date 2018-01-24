module.exports = function (router, controller) {
  /**
  * @swagger
  * /collaborators:
  *   get:
  *     tags:
  *       - Collaborators
  *     description: Get all Collaborators
  *     summary: GET ALL Collaborators
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of Collaborators
  *         schema:
  *           $ref: '#/definitions/Collaborator'
  *       500:
  *         description: Internal error
  */
  router.get('/collaborators', function (req, res) {
    controller.getAllCollaborators().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}

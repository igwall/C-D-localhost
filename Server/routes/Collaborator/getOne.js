const Util = require('../../controllers/Util')

module.exports = function (router, controller) {
  /**
  * @swagger
  * /collaborators/{collaboratorId}:
  *   get:
  *     tags:
  *       - Collaborators
  *     description: Get One collaborator
  *     summary: GET One Collaborator
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: collaboratorId
  *         type: string
  *         description: The collaborator id we want to retrieve
  *         in: path
  *         required: true
  *     responses:
  *       200:
  *         description: One collaborator
  *         schema:
  *           $ref: '#/definitions/Collaborator'
  *       500:
  *         description: Internal error
  */
  router.get('/collaborators/:collaboratorId', function (req, res) {
    let requiredParameter = ['collaboratorId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller.getOneCollaborator(req.params.collaboratorId).then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(err.status).json(err)
    })
  })
}

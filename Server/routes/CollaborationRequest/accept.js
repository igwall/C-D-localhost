const Util = require('../../controllers/Util')
const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /collaboration/{collaborationRequestId}:
  *   put:
  *     tags:
  *       - Collaboration Requests
  *     description: Accept a collaboration request
  *     summary: ACCEPT a Collaboration Request
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: collaborationRequestId
  *         type: string
  *         description: The collaboration request id to accept
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the collaboration request has been accepted
  *       500:
  *         description: Internal error
  */
  router.put('/collaboration/:collaborationRequestId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['collaborationRequestId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller
      .acceptCollaborationRequest(req.params.collaborationRequestId)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

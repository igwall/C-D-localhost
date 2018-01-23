const Util = require('../../controllers/Util')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /collaboration/{collaborationRequestId}:
  *   delete:
  *     tags:
  *       - Collaboration Requests
  *     description: Delete a collaboration request
  *     summary: DELETE a Collaboration Request
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: collaborationRequestId
  *         type: string
  *         description: The collaboration request id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the collaboration request has been deleted
  *       500:
  *         description: Internal error
  */
  router.put('/collaboration/:collaborationRequestId', function (req, res) {
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
        res.status(201).json('Successfully accepted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

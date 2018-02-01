const Util = require('../../controllers/Util')

module.exports = (router, controllers) => {
  /**
    * @swagger
    * /collaborators/{collaboratorId}:
    *   put:
    *     tags:
    *       - Collaborators
    *     description: Update a collaborator
    *     summary: UPDATE a Collaborator
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: collaboratorId
    *         type: string
    *         description: The collaborator id we want to update
    *         in: path
    *         required: true
    *       - name: body
    *         description: The Collaborator object that needs to be updated
    *         in: body
    *         required: true
    *         schema:
    *             $ref: '#/definitions/NewCollaborator'
    *     responses:
    *       200:
    *         description: Message confirming the Collaborator has been updated
    *       500:
    *         description: Internal error
    */
  router.put('/collaborators/:collaboratorId', function (req, res) {
    let requiredParameter = ['collaboratorId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controllers.updateCollaborator(req.params.collaboratorId, req.body).then((data) => {
      res.status(200).json('Successfully updated')
    }).catch((err) => {
      res.status(500).json(err)
    })
  })
}

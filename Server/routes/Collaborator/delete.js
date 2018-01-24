const Util = require('../../controllers/Util')
const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /collaborators/{collaboratorId}:
  *   delete:
  *     tags:
  *       - Collaborators
  *     description: Delete a collaborator
  *     summary: DELETE a Collaborator
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: collaboratorId
  *         type: string
  *         description: The collaborator id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the collaborator has been deleted
  *       500:
  *         description: Internal error
  */
  router.delete('/collaborators/:collaboratorId', function (req, res) {
    let requiredParameter = ['collaboratorId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller
      .deleteCollaborator(req.params.collaboratorId)
      .then(data => {
        res.status(201).json('Successfully deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

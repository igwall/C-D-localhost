const Util = require('../../controllers/Util')
const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /references/{referenceId}:
  *   delete:
  *     tags:
  *       - References
  *     description: Delete a reference
  *     summary: DELETE a Reference
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: referenceId
  *         type: string
  *         description: The reference id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the reference has been deleted
  *       500:
  *         description: Internal error
  */
  router.delete('/references/:referenceId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['referenceId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller
      .deleteReference(req.params.referenceId)
      .then(data => {
        res.status(201).json('Successfully deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

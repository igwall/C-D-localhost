const Util = require('../../controllers/Util')
const {requiresAdminLogin} = require('../../config/middlewares/authorizations')

module.exports = (router, controllers) => {
  /**
    * @swagger
    * definitions:
    *   NewReference:
    *     properties:
    *       title:
    *         type: string
    *       description:
    *         type: string
    *       link:
    *         type: string
    */

  /**
    * @swagger
    * /references/{referenceId}:
    *   put:
    *     tags:
    *       - Texts
    *     description: Update a reference
    *     summary: UPDATE a Reference
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: referenceId
    *         type: string
    *         description: The reference id we want to update
    *         in: path
    *         required: true
    *       - name: body
    *         description: The Reference object that needs to be updated
    *         in: body
    *         required: true
    *         schema:
    *             $ref: '#/definitions/NewReference'
    *     responses:
    *       200:
    *         description: Message confirming the Reference has been updated
    *       500:
    *         description: Internal error
    */
  router.put('/references/:referenceId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['referenceId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controllers.updateReference(req).then((data) => {
      res.status(200).json('Successfully updated')
    }).catch((err) => {
      res.status(500).json(err)
    })
  })
}

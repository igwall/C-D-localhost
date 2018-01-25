const Util = require('../../controllers/Util')
const { requiresLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
    /**
   * @swagger
   * definitions:
   *   NewCollaborationRequest:
   *     properties:
   *       firstname:
   *         type: string
   *       lastname:
   *         type: string
   *       motivation:
   *         type: string
   *       user:
   *         type: string
   */

  /**
  * @swagger
  * /collaboration:
  *   post:
  *     tags:
  *       - Collaboration Requests
  *     description: Create a new collaboration request
  *     summary: CREATE a new Collaboration Request
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: The Collaboration Request object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/NewCollaborationRequest'
  *     responses:
  *       201:
  *         description: The newly created collaboration request
  *       500:
  *         description: Internal error
  */
  router.post('/collaboration', [requiresLogin], (req, res) => {
    let requiredBody = ['firstname', 'lastname', 'motivation', 'user']
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    } else {
      controller
      .createCollaborationRequest(req)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}

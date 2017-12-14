const Util = require('../../controllers/Util')
const {roomExists} = require('../../config/middlewares/roomAuthorizations')

module.exports = (router, controller) => {
    /**
   * @swagger
   * definitions:
   *   NewMaterial:
   *     properties:
   *       name:
   *         type: string
   */

  /**
  * @swagger
  * /rooms/{roomId}/materials:
  *   post:
  *     tags:
  *       - Materials
  *     description: Create a new material
  *     summary: CREATE a new Material
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: roomId
  *         type: string
  *         description: The room id where we want to insert the material
  *         in: path
  *         required: true
  *       - name: body
  *         description: The Material object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/NewMaterial'
  *     responses:
  *       201:
  *         description: The newly created material
  *       500:
  *         description: Internal error
  */
  router.post('/rooms/:roomId/materials', [roomExists], (req, res) => {
    let requiredBody = ['name']
    let requiredParameter = ['roomId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    else {
      controller
      .createMaterial(req)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}
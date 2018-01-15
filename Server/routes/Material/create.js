const Util = require('../../controllers/Util')

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
  * /materials:
  *   post:
  *     tags:
  *       - Materials
  *     description: Create a new material
  *     summary: CREATE a new Material
  *     produces:
  *       - application/json
  *     parameters:
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
  router.post('/materials', (req, res) => {
    let requiredBody = ['name']
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

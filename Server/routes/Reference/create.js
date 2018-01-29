const Util = require('../../controllers/Util')

module.exports = (router, controller) => {
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
  * /references:
  *   post:
  *     tags:
  *       - References
  *     description: Create a new reference
  *     summary: CREATE a new Reference
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: The Reference object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/NewReference'
  *     responses:
  *       201:
  *         description: The newly created reference
  *       500:
  *         description: Internal error
  */
  router.post('/references', (req, res) => {
    let requiredBody = ['title', 'description', 'link']
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    } else {
      controller
      .createReference({...req.body})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}

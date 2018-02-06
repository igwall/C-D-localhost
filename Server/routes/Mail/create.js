const Util = require('../../controllers/Util')

module.exports = (router, controller) => {
    /**
   * @swagger
   * definitions:
   *   Mail:
   *     properties:
   *       email:
   *         type: string
   *       name:
   *         type: string
   *       number:
   *         type: string
   *       sujet:
   *         type: string
   *       message:
   *         type: string
   */

  /**
  * @swagger
  * /mail:
  *   post:
  *     tags:
  *       - Mails
  *     description: Create a new mail
  *     summary: CREATE a new mail
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: The mail object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Mail'
  *     responses:
  *       201:
  *         description: The newly created mail
  *       500:
  *         description: Internal error
  */
  router.post('/mails', (req, res) => {
    let requiredBody = ['email', 'name', 'number', 'sujet', 'message']
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    } else {
      controller
      .createMail({...req.body})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}

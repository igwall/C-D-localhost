const Util = require('../../controllers/Util')

module.exports = (router, controller) => {
    /**
   * @swagger
   * definitions:
   *   NewQuote:
   *     properties:
   *       author:
   *         type: string
   *       text:
   *         type: string
   */

  /**
  * @swagger
  * /quotes:
  *   post:
  *     tags:
  *       - Quotes
  *     description: Create a new quote
  *     summary: CREATE a new Quote
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: The Quote object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/NewQuote'
  *     responses:
  *       201:
  *         description: The newly created quote
  *       500:
  *         description: Internal error
  */
  router.post('/quotes', (req, res) => {
    let requiredBody = ['author', 'text']
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    } else {
      controller
      .createQuote({...req.body})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}

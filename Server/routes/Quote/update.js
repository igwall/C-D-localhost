const Util = require('../../controllers/Util')
const {requiresAdminLogin} = require('../../config/middlewares/authorizations')

module.exports = (router, controllers) => {
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
    * /quotes/{quoteId}:
    *   put:
    *     tags:
    *       - Quotes
    *     description: Update a quote
    *     summary: UPDATE a Quote
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: quoteId
    *         type: string
    *         description: The quote id we want to update
    *         in: path
    *         required: true
    *       - name: body
    *         description: The Quote object that needs to be updated
    *         in: body
    *         required: true
    *         schema:
    *             $ref: '#/definitions/NewQuote'
    *     responses:
    *       200:
    *         description: Message confirming the Quote has been updated
    *       500:
    *         description: Internal error
    */
  router.put('/quotes/:quoteId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['quoteId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controllers.updateQuote(req).then((data) => {
      res.status(200).json('Successfully updated')
    }).catch((err) => {
      res.status(500).json(err)
    })
  })
}

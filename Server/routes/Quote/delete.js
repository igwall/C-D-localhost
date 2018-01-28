const Util = require('../../controllers/Util')
const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /quotes/{quoteId}:
  *   delete:
  *     tags:
  *       - Quotes
  *     description: Delete a quote
  *     summary: DELETE a Quote
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: quoteId
  *         type: string
  *         description: The quote id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the quote has been deleted
  *       500:
  *         description: Internal error
  */
  router.delete('/quotes/:quoteId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['quoteId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller
      .deleteQuote(req.params.quoteId)
      .then(data => {
        res.status(201).json('Successfully deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

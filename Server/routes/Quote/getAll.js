module.exports = function (router, controller) {
  /**
  * @swagger
  * /quotes:
  *   get:
  *     tags:
  *       - Quotes
  *     description: Get all quotes
  *     summary: GET ALL Quotes
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of Quotes
  *         schema:
  *           $ref: '#/definitions/Quote'
  *       500:
  *         description: Internal error
  */
  router.get('/quotes', function (req, res) {
    controller.getAllQuotes().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}

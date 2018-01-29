module.exports = function (router, controller) {
  /**
  * @swagger
  * /references:
  *   get:
  *     tags:
  *       - References
  *     description: Get all references
  *     summary: GET ALL References
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of References
  *         schema:
  *           $ref: '#/definitions/Reference'
  *       500:
  *         description: Internal error
  */
  router.get('/references', function (req, res) {
    controller.getAllReferences().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}

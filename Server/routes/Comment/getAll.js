module.exports = function (router, controller) {
  /**
  * @swagger
  * /comments:
  *   get:
  *     tags:
  *       - Comments
  *     description: Get all comments
  *     summary: GET ALL Comments
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of Comments
  *         schema:
  *           $ref: '#/definitions/Comment'
  *       500:
  *         description: Internal error
  */
  router.get('/comments', function (req, res) {
    controller.getAllComments().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}

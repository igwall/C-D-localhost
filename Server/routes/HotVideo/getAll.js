module.exports = function (router, controller) {
  /**
  * @swagger
  * /hotvideos:
  *   get:
  *     tags:
  *       - Hot Videos
  *     description: Get all hot videos
  *     summary: GET ALL Hot Videos
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of Hot Videos
  *         schema:
  *           $ref: '#/definitions/HotVideo'
  *       500:
  *         description: Internal error
  */
  router.get('/hotvideos', function (req, res) {
    controller.getAllHotVideos().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}

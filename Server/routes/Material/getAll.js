module.exports = function (router, controller) {
  /**
  * @swagger
  * /materials:
  *   get:
  *     tags:
  *       - Materials
  *     description: Get all materials
  *     summary: GET ALL Materials
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of Materials
  *         schema:
  *           $ref: '#/definitions/Material'
  *       500:
  *         description: Internal error
  */
  router.get('/materials', function (req, res) {
    controller.getAllMaterials().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}

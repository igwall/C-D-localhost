module.exports = function (router, controller) {
  /**
  * @swagger
  * /rooms:
  *   get:
  *     tags:
  *       - Rooms
  *     description: Get all rooms
  *     summary: GET ALL Rooms
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of Rooms
  *         schema:
  *           $ref: '#/definitions/Room'
  *       500:
  *         description: Internal error
  */
  router.get('/rooms', function (req, res) {
    controller.getAllRooms().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}
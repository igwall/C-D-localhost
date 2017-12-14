const Util = require('../../controllers/Util')
const {roomExists} = require('../../config/middlewares/roomAuthorizations')

module.exports = function (router, controller) {
  /**
  * @swagger
  * /rooms/{roomId}:
  *   get:
  *     tags:
  *       - Rooms
  *     description: Get One room
  *     summary: GET One Room
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: roomId
  *         type: string
  *         description: The room id we want to retrieve
  *         in: path
  *         required: true
  *     responses:
  *       200:
  *         description: One room
  *         schema:
  *           $ref: '#/definitions/Room'
  *       500:
  *         description: Internal error
  */
  router.get('/rooms/:roomId', [roomExists], function (req, res) {
    let requiredParameter = ['roomId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller.getOneRoom(req.params.roomId).then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(err.status).json(err)
      })
  })
}
const Util = require('../../controllers/Util')

module.exports = (router, controller) => {
    /**
   * @swagger
   * definitions:
   *   NewRoom:
   *     properties:
   *       name:
   *         type: string
   */

  /**
  * @swagger
  * /rooms:
  *   post:
  *     tags:
  *       - Rooms
  *     description: Create a new room
  *     summary: CREATE a new Room
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: The Room object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/NewRoom'
  *     responses:
  *       201:
  *         description: The newly created room
  *       500:
  *         description: Internal error
  */
  router.post('/rooms', (req, res) => {
    let requiredBody = ['name']
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    else {
      controller
      .createRoom({...req.body})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}
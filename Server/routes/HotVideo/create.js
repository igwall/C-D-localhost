const Util = require('../../controllers/Util')

module.exports = (router, controller) => {
    /**
   * @swagger
   * definitions:
   *   NewHotVideo:
   *     properties:
   *       title:
   *         type: string
   *       youtube_link:
   *         type: string
   */

  /**
  * @swagger
  * /hotvideos:
  *   post:
  *     tags:
  *       - Hot Videos
  *     description: Create a new hot video
  *     summary: CREATE a new Hot Video
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: The Hot Video object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/NewHotVideo'
  *     responses:
  *       201:
  *         description: The newly created hot video
  *       500:
  *         description: Internal error
  */
  router.post('/hotvideos', (req, res) => {
    let requiredBody = ['title', 'youtube_link']
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    } else {
      controller
      .createHotVideo({...req.body})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}

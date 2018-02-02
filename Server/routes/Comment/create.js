const Util = require('../../controllers/Util')

module.exports = (router, controller) => {
    /**
   * @swagger
   * definitions:
   *   Comment:
   *     properties:
   *       text:
   *         type: string
   */

  /**
  * @swagger
  * /comments:
  *   post:
  *     tags:
  *       - Comments
  *     description: Create a new comment
  *     summary: CREATE a new Comment
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: body
  *         description: The Comment object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/Comment'
  *     responses:
  *       201:
  *         description: The newly created comment
  *       500:
  *         description: Internal error
  */
  router.post('/comments', (req, res) => {
    let requiredBody = ['text']
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    } else {
      controller
      .createComment(req)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}

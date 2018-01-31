const Util = require('../../controllers/Util')
const {commentExists} = require('../../config/middlewares/commentAuthorizations')

module.exports = function (router, controller) {
  /**
  * @swagger
  * /comments/{commentId}:
  *   get:
  *     tags:
  *       - Comments
  *     description: Get One comment
  *     summary: GET One Comment
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: commentId
  *         type: string
  *         description: The comment id we want to retrieve
  *         in: path
  *         required: true
  *     responses:
  *       200:
  *         description: One comment
  *         schema:
  *           $ref: '#/definitions/Comment'
  *       500:
  *         description: Internal error
  */
  router.get('/comments/:commentId', [commentExists], function (req, res) {
    let requiredParameter = ['commentId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller.getOneComment(req.params.commentId).then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(err.status).json(err)
    })
  })
}

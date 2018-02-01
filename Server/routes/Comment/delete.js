const Util = require('../../controllers/Util')
const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /comments/{commentId}:
  *   delete:
  *     tags:
  *       - Comments
  *     description: Delete a comment
  *     summary: DELETE a Comment
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: commentId
  *         type: string
  *         description: The comment id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the comment has been deleted
  *       500:
  *         description: Internal error
  */
  router.delete('/comments/:commentId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['commentId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller
      .deleteComment(req.params.commentId)
      .then(data => {
        res.status(201).json('Successfully deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

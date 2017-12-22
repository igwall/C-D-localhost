const Util = require('../../controllers/Util')
const { recipeExists } = require('../../config/middlewares/recipeAuthorizations')

module.exports = (router, controller) => {
  /**
 * @swagger
 * definitions:
 *   NewComment:
 *     properties:
 *       message:
 *         type: string
 */

  /**
  * @swagger
  * /recipes/{recipeId}/comments:
  *   post:
  *     tags:
  *       - Comments
  *     description: Create a new comment
  *     summary: CREATE a new Comment
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: recipeId
  *         type: string
  *         description: The recipe id where we want to insert the comment
  *         in: path
  *         required: true
  *       - name: body
  *         description: The Comment object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/NewComment'
  *     responses:
  *       201:
  *         description: The newly created comment
  *       500:
  *         description: Internal error
  */
  router.post('/recipes/:recipeId/comments', [recipeExists], (req, res) => {
    let requiredBody = ['message']
    let requiredParameter = ['recipeId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    else {
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

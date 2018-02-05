const Util = require('../../controllers/Util')
const {recipeExists} = require('../../config/middlewares/recipeAuthorizations')

module.exports = function (router, controller) {
  /**
  * @swagger
  * /recipes/{recipeId}:
  *   get:
  *     tags:
  *       - Recipes
  *     description: Get One recipe
  *     summary: GET One Recipe
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: recipeId
  *         type: string
  *         description: The recipe id we want to retrieve
  *         in: path
  *         required: true
  *     responses:
  *       200:
  *         description: One recipe
  *         schema:
  *           $ref: '#/definitions/Recipe'
  *       500:
  *         description: Internal error
  */
  router.get('/recipes/:recipeId', [recipeExists], function (req, res) {
    let requiredParameter = ['recipeId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller.getOneRecipe(req.params.recipeId).then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(err.status).json(err)
    })
  })
}

const Util = require('../../controllers/Util')
const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /recipes/{recipeId}:
  *   delete:
  *     tags:
  *       - Recipes
  *     description: Delete a recipe
  *     summary: DELETE a Recipe
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: recipeId
  *         type: string
  *         description: The recipe id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the recipe has been deleted
  *       500:
  *         description: Internal error
  */
  router.delete('/recipes/:recipeId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['recipeId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller
      .deleteRecipe(req.params.recipeId)
      .then(data => {
        res.status(201).json('Successfully deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

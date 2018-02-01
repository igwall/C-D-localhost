const Util = require('../../controllers/Util')

module.exports = (router, controllers) => {
  /**
    * @swagger
    * /recipes/{recipeId}:
    *   put:
    *     tags:
    *       - Recipes
    *     description: Update a recipe
    *     summary: UPDATE a Recipe
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: recipeId
    *         type: string
    *         description: The recipe id we want to update
    *         in: path
    *         required: true
    *       - name: body
    *         description: The Recipe object that needs to be updated
    *         in: body
    *         required: true
    *         schema:
    *             $ref: '#/definitions/NewRecipe'
    *     responses:
    *       200:
    *         description: Message confirming the Recipe has been updated
    *       500:
    *         description: Internal error
    */
  router.put('/recipes/:recipeId', function (req, res) {
    let requiredParameter = ['recipeId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controllers.updateRecipe(req.params.recipeId, req.body).then((data) => {
      res.status(200).json('Successfully updated')
    }).catch((err) => {
      res.status(500).json(err)
    })
  })
}

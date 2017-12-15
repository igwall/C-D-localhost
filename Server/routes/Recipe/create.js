const { recipeExists } = require('../../config/middlewares/recipeAuthorizations')
const { materialExists } = require('../../config/middlewares/materialAuthorizations')

const Util = require('../../controllers/Util')

module.exports = (router, controller) => {
    /**
   * @swagger
   * definitions:
   *   NewRecipe:
   *     properties:
   *       title:
   *         type: string
   *       statement:
   *         type: string
   *       description:
   *         type: string
   *       duration:
   *         type: integer
   */

  /**
  * @swagger
  * /rooms/{roomId}/materials/{materialId}/recipes:
  *   post:
  *     tags:
  *       - Recipes
  *     description: Create a new recipe
  *     summary: CREATE a new Recipe
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: roomId
  *         type: string
  *         description: The room id where we want to insert the recipe
  *         in: path
  *         required: true
  *       - name: materialId
  *         type: string
  *         description: The material id where we want to insert the recipe
  *         in: path
  *         required: true
  *       - name: body
  *         description: The Recipe object that needs to be added
  *         in: body
  *         required: true
  *         schema:
  *             $ref: '#/definitions/NewRecipe'
  *     responses:
  *       201:
  *         description: The newly created recipe
  *       500:
  *         description: Internal error
  */
  router.post('/rooms/:roomId/materials/:materialId/recipes', [materialExists], (req, res) => {
    let requiredBody = ['title', 'statement']
    let requiredParameter = ['roomId', 'materialId']
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
      .createRecipe(req)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}
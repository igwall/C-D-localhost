const { roomExists } = require('../../config/middlewares/recipeAuthorizations')
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
   *       description:
   *         type: string
   *       number:
   *         type: string
   */

  /**
  * @swagger
  * /recipes:
  *   post:
  *     tags:
  *       - Recipes
  *     description: Create a new recipe
  *     summary: CREATE a new Recipe
  *     produces:
  *       - application/json
  *     parameters:
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
  router.post('/recipes', (req, res) => {
    let requiredBody = ['title', 'description', 'number', 'rooms', 'materials']
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    } else {
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

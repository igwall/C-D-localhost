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
    let requiredBody = ['title', 'statement']
    requiredBody = Util.checkRequest(req.body, requiredBody)
    if (requiredBody.length > 0) {
      let stringMessage = requiredBody.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    else {
      controller
      .createRecipe({...req.body})
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
  })
}
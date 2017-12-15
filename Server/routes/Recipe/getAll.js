module.exports = function (router, controller) {
  /**
  * @swagger
  * /recipes:
  *   get:
  *     tags:
  *       - Recipes
  *     description: Get all recipes
  *     summary: GET ALL Recipes
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of Recipes
  *         schema:
  *           $ref: '#/definitions/Recipe'
  *       500:
  *         description: Internal error
  */
  router.get('/recipes', function (req, res) {
    controller.getAllRecipes().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}
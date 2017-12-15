const Util = require('../../controllers/Util')
const {materialExists} = require('../../config/middlewares/materialAuthorizations')

module.exports = function (router, controller) {
  /**
  * @swagger
  * /materials/{materialId}:
  *   get:
  *     tags:
  *       - Materials
  *     description: Get One material
  *     summary: GET One Material
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: materialId
  *         type: string
  *         description: The material id we want to retrieve
  *         in: path
  *         required: true
  *     responses:
  *       200:
  *         description: One material
  *         schema:
  *           $ref: '#/definitions/Material'
  *       500:
  *         description: Internal error
  */
  router.get('/materials/:materialId', [materialExists], function (req, res) {
    let requiredParameter = ['materialId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller.getOneMaterial(req.params.materialId).then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(err.status).json(err)
    })
  })
}
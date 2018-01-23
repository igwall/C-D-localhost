const Util = require('../../controllers/Util')
const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /materials/{materialId}:
  *   delete:
  *     tags:
  *       - Materials
  *     description: Delete a material
  *     summary: DELETE a Material
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: materialId
  *         type: string
  *         description: The material id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the material has been deleted
  *       500:
  *         description: Internal error
  */
  router.delete('/materials/:materialId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['materialId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller
      .deleteMaterial(req.params.materialId)
      .then(data => {
        res.status(201).json('Successfully deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

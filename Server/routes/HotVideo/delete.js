const Util = require('../../controllers/Util')
const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /hotvideos/{videoId}:
  *   delete:
  *     tags:
  *       - Hot Videos
  *     description: Delete a hot video
  *     summary: DELETE a Hot Video
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: videoId
  *         type: string
  *         description: The hot video id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the hot video has been deleted
  *       500:
  *         description: Internal error
  */
  router.delete('/hotvideos/:videoId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['videoId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller
      .deleteHotVideo(req.params.videoId)
      .then(data => {
        res.status(201).json('Successfully deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

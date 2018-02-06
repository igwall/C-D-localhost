const Util = require('../../controllers/Util')
const { requiresAdminLogin } = require('../../config/middlewares/authorizations')

module.exports = (router, controller) => {
  /**
  * @swagger
  * /mails/{mailId}:
  *   delete:
  *     tags:
  *       - Mails
  *     description: Delete a mail
  *     summary: DELETE a Mail
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: mailId
  *         type: string
  *         description: The mail id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the mail has been deleted
  *       500:
  *         description: Internal error
  */
  router.delete('/mails/:mailId', [requiresAdminLogin], function (req, res) {
    let requiredParameter = ['mailId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    controller
      .deleteMail(req.params.mailId)
      .then(data => {
        res.status(201).json('Successfully deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
}

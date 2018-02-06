module.exports = function (router, controller) {
  /**
  * @swagger
  * /mails:
  *   get:
  *     tags:
  *       - Mails
  *     description: Get all mails
  *     summary: GET ALL Mails
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: An array of Mails
  *         schema:
  *           $ref: '#/definitions/Mail'
  *       500:
  *         description: Internal error
  */
  router.get('/mails', function (req, res) {
    controller.getAllMails().then((data) => {
      res.status(200).json(data)
    })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
}

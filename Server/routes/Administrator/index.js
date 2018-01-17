const mongoose = require('mongoose')
const Administrator = mongoose.model('Administrator')

/**
  * @swagger
  * definitions:
  *   NewAdmin:
  *     properties:
  *       username:
  *         type: string
  *       password:
  *         type: string
  */

/**
    * @swagger
    * definitions:
    *   AdminLoginForm:
    *     properties:
    *       username:
    *         type: string
    *       password:
    *         type: string
    */
module.exports = (router, administratorController) => {
  /**
    * @swagger
    * /admin/register:
    *   post:
    *     tags:
    *       - Authentication
    *     description: Register for a new administrator account
    *     summary: CREATE a new administrator
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: body
    *         description: The admin object to be added
    *         in: body
    *         required: true
    *         schema:
    *             $ref: '#/definitions/NewAdmin'
    *     responses:
    *       201:
    *         description: Message confirming the Admin Account has been created
    *       500:
    *         description: Internal error
    */
  router.post('/admin/register', (req, res) => {
    const admin = new Administrator(req.body)
    administratorController.create(admin).then(admin => {
      administratorController.login(admin).then(token => {
        return res.status(201).send({token: token})
      }).catch(err => {
        return res.status(400).send(err)
      })
    }).catch(err => {
      console.error(err)
      return res.status(400).send('Bad request') // TODO: Error details
    })
  })

  /**
      * @swagger
      * /admin/login:
      *   post:
      *     tags:
      *       - Authentication
      *     description: Login to an admin account
      *     summary: Generate a token
      *     produces:
      *       - application/json
      *     parameters:
      *       - name: body
      *         description: The admin login form
      *         in: body
      *         required: true
      *         schema:
      *             $ref: '#/definitions/AdminLoginForm'
      *     responses:
      *       200:
      *         description: Token
      *       500:
      *         description: Internal error
      */
  router.post('/admin/login', function (req, res) {
    let admin = new Administrator({
      email: req.body.email,
      password: req.body.password
    })
    administratorController.login(admin).then(token => {
      return res.status(200).send({
        token: token
      })
    }).catch(err => {
      return res.status(err.status).send(err.message)
    })
  })
}

const mongoose = require('mongoose')
const Util = require('../../controllers/Util')
const Administrator = mongoose.model('Administrator')

/**
  * @swagger
  * definitions:
  *   Administrator:
  *     properties:
  *       username:
  *         type: string
  *       password:
  *         type: string
  *       role:
  *         type: string
  *         enum: ['moderator', 'administrator']
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
    *       role:
    *         type: moderator
    */
module.exports = (router, administratorController) => {
  /**
    * @swagger
    * /admin/register:
    *   post:
    *     tags:
    *       - Administrators
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
    *             $ref: '#/definitions/Administrator'
    *     responses:
    *       201:
    *         description: Message confirming the Admin Account has been created
    *       500:
    *         description: Internal error
    */
  router.post('/admin/register', (req, res) => {
    const admin = new Administrator(req.body)
    administratorController.create(admin).then(admin => {
      return res.status(201).send(admin._id)
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
      *       - Administrators
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
      username: req.body.username,
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

  /**
      * @swagger
      * /admins:
      *   get:
      *     tags:
      *       - Administrators
      *     description: Get all admins
      *     summary: GET ALL Adminsitrators
      *     produces:
      *       - application/json
      *     responses:
      *       200:
      *         description: An array of Adminsitrators
      *         schema:
      *           $ref: '#/definitions/Administrator'
      *       500:
      *         description: Internal error
      */
  router.get('/admins', function (req, res) {
    // TODO: ADD Pagination
    administratorController.getAdministrators().then(admins => {
      return res.status(200).send(admins)
    }).catch(err => {
      return res.status(400).send(err)
    })
  })

  /**
  * @swagger
  * /admins/{adminId}:
  *   delete:
  *     tags:
  *       - Administrators
  *     description: Delete an administrator
  *     summary: DELETE an Administrator
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: adminId
  *         type: string
  *         description: The admin id to delete
  *         in: path
  *         required: true
  *     responses:
  *       201:
  *         description: Message confirming the admin has been deleted
  *       500:
  *         description: Internal error
  */
  router.delete('/admins/:adminId', function (req, res) {
    let requiredParameter = ['adminId']
    requiredParameter = Util.checkRequest(req.params, requiredParameter)
    if (requiredParameter.length > 0) {
      let stringMessage = requiredParameter.join(',')
      res.status(400).json(`Missing ${stringMessage}`)
      return
    }
    administratorController
      .deleteAdministrator(req.params.adminId)
      .then(data => {
        res.status(201).json('Successfully deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  // GET ONE USER
  router.get('/admins/:adminId', function (req, res) {
    administratorController.getAdministrator(req.params.adminId).then(admin => {
      return res.status(200).send(admin)
    }).catch(err => {
      return res.status(400).send(err)
    })
  })
}

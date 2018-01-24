module.exports = function (router, controller) {
  require('./getAll')(router, controller)
  require('./delete')(router, controller)
}

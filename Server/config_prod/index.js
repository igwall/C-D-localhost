const prod = require('./env/prod')

module.exports = {
  prod: prod
}[process.env.NODE_ENV || 'prod']

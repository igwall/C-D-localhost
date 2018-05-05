const development = require('./env/dev')
const test = require('./env/test')
const prod = require('./env/prod')

module.exports = {
  prod: prod,
  development: development,
  test: test
}[process.env.NODE_ENV || 'development']

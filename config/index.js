const convict = require('convict')

const conf = convict({
  // Environment
  env: {
    doc: 'Application environment',
    format: ['dev', 'test'],
    default: 'dev',
    env: 'NODE_ENV'
  },

  // Server
  port: {
    doc: 'Port that the service should run on',
    format: 'port',
    default: '8080',
    env: 'PORT'
  },

  // Logging
  logFormat: {
    doc: 'Format that HTTP logs will be recorded in',
    format: String,
    default: 'dev'
  }
})

conf.loadFile('./config/' + conf.get('env') + '.json')
conf.validate({ strict: true })

module.exports = conf

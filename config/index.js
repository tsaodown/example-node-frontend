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
  server: {
    port: {
      doc: 'Port that the service should run on',
      format: 'port',
      default: 8080,
      env: 'PORT'
    }
  },

  // Logging
  logging: {
    format: {
      doc: 'Format that HTTP logs will be recorded in',
      format: String,
      default: 'dev'
    }
  }
})

const confFile = `./config/${conf.get('env')}.json`
console.log(`Loading configuration: ${confFile}`)
conf.loadFile(confFile)
conf.validate({ strict: true })

module.exports = conf

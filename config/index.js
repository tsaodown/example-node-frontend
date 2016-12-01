const convict = require('convict')

const conf = convict({
  env: {
    doc: 'Application environment',
    format: ['dev', 'test'],
    default: 'dev',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'Port that the service should run on',
    format: 'port',
    default: '8080',
    env: 'PORT'
  }
})

conf.loadFile('./config/' + conf.get('env') + '.json')
conf.validate({ strict: true })

module.exports = conf

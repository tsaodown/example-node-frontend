const convict = require('convict')

const conf = convict({
  env: {
    doc: 'Application environment',
    format: ['dev', 'test'],
    default: 'dev',
    env: 'NODE_ENV'
  }
})

conf.loadFile('./config/' + conf.get('env') + '.json')
conf.validate({ strict: true })

module.exports = conf

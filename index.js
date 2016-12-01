const express = require('express')
const promisify = require('es6-promisify')

const conf = require('./config')

const app = express()
const listen = promisify(app.listen)

listen(conf.get('port')).then(() => {
  console.log(`Server listening on port ${conf.get('port')}`)
})

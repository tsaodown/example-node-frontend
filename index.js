const express = require('express')
const morgan = require('morgan')
const promisify = require('es6-promisify')

const conf = require('./config')

const app = express()

app.use(morgan(conf.get('logFormat')))

app.listen(conf.get('port'), () => {
  console.log(`Server listening on port ${conf.get('port')}`)
})

'use strict';

const Express = require('express')
const Morgan = require('morgan')

const conf = require('./config')

const app = Express()

app.use(Morgan(conf.get('logging.format')))

app.listen(conf.get('server.port'), () => {
  console.log(`Server listening on port ${conf.get('server.port')}`)
})

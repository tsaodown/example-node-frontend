'use strict';

const path = require('path')

const Express = require('express')
const Morgan = require('morgan')

const conf = require('./config')

const app = Express()

app.use(Morgan(conf.get('logging.format')))
app.use(Express.static(path.resolve(__dirname, 'public')))

app.listen(conf.get('server.port'), () => {
  console.log(`Server listening on port ${conf.get('server.port')}`)
})

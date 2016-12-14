'use strict';

const path = require('path')

const Express = require('express')
const Morgan = require('morgan')
const Webpack = require('webpack')
const WebpackDevMW = require('webpack-dev-middleware')
const WebpackHotMW = require('webpack-hot-middleware')

const compiler = Webpack(require('./webpack.config'))
const conf = require('./config')

const app = Express()

app.use(Morgan(conf.get('logging.format')))
app.use(Express.static(path.resolve(__dirname, 'public')))
app.use(WebpackDevMW(compiler, {
  publicPath: '/build',

  stats: {
    colors: true
  }
}))
app.use(WebpackHotMW(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(conf.get('server.port'), () => {
  console.log(`Server listening on port ${conf.get('server.port')}`)
})

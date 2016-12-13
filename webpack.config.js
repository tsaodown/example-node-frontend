const path = require('path')
const process = require('process')

const APP_DIR = path.resolve(__dirname, 'app')
const BUILD_DIR = path.resolve(__dirname, 'public', 'build')
const TARGET = process.env.npm_lifecycle_event

console.log(TARGET)
process.env.BABEL_ENV = TARGET

const config = {
  entry: path.resolve(APP_DIR, 'index'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: APP_DIR
    }]
  }
}

module.exports = config

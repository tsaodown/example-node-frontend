const path = require('path')
const process = require('process')

const Webpack = require('webpack')

const APP_DIR = path.resolve(__dirname, 'app')
const BUILD_DIR = path.resolve(__dirname, 'public', 'build')
const TARGET = process.env.npm_lifecycle_event

console.log(TARGET)
process.env.BABEL_ENV = TARGET

const config = {
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(APP_DIR, 'index')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/build'
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
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin()
  ]
}

module.exports = config

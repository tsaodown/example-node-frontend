const path = require('path')
const process = require('process')

const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
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
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html'
    }),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin()
  ]
}

module.exports = config

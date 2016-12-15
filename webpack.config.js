const path = require('path')
const process = require('process')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')

const SRC_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

process.env.BABEL_ENV = process.env.NODE_ENV

const config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(SRC_DIR, 'index')
  ],
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /(node_modules)/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, 'index.tpl.html')
    }),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin()
  ]
}

module.exports = config

const path = require('path')
const process = require('process')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')

const APP_DIR = path.resolve(__dirname, 'app')
const BUILD_DIR = path.resolve(__dirname, 'dist')

process.env.BABEL_ENV = process.env.NODE_ENV

const config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(APP_DIR, 'index')
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
      loaders: ['react-hot', 'babel', 'eslint'],
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

const installedPath = require('get-installed-path')
const path = require('path')
const process = require('process')

const Autoprefixer = require('autoprefixer')
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
      loaders: ['react-hot', 'babel'],
      exclude: /(node_modules)/
    }, {
      test: /\.scss$/,
      loader: 'style?sourceMap!css?sourceMap!postcss?sourceMap!sass?sourceMap'
    }]
  },
  'postcss': () => {
    return [
      Autoprefixer
    ]
  },
  sassLoader: {
    includePaths: [
      path.join(installedPath.sync('foundation-sites', {
        local: true
      }), 'scss')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(APP_DIR, 'index.tpl.html')
    }),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin()
  ]
}

module.exports = config

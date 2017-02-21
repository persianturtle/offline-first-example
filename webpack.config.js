const { resolve } = require('path')
const Webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[chunkhash].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/offline-first-example/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    }),
    new Webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    }),
    new OfflinePlugin()
  ]
}

const path = require('path')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')

module.exports = merge(webpackBase, {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  }
})

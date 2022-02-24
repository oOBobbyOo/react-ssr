const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')

module.exports = merge(webpackBase, {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()]
})

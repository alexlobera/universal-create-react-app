'use strict';

const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const paths = require('./paths');
const nodeExternals = require('webpack-node-externals');

const base = require('./webpack.config.base');

const config = Object.assign({}, base)

config.target = 'node'
config.entry = './src/server'
config.externals = [nodeExternals()] // / in order to ignore all modules in node_modules folder
config.output = {
  path: paths.serverBuild,
  filename: 'bundle.js',
  publicPath: '/'
},

config.node = {
  console: false,
  global: false,
  process: false,
  Buffer: false,
  __filename: false,
  __dirname: false,
  setImmediate: false,
}

module.exports = config

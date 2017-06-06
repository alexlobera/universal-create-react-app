'use strict';

const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const paths = require('./paths');
const nodeExternals = require('webpack-node-externals');

const base = require('./webpack.config.base');

base.target = 'node'
base.entry = './src/server'
base.externals = [nodeExternals()] // / in order to ignore all modules in node_modules folder
base.output = {
  path: paths.serverBuild,
  filename: 'bundle.js',
  publicPath: '/'
},

base.node = {
  console: false,
  global: false,
  process: false,
  Buffer: false,
  __filename: false,
  __dirname: false,
  setImmediate: false,
}

module.exports = base

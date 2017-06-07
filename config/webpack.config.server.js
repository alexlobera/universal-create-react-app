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
/*
config.plugins = config.plugins.concat([
  // This is necessary to emit hot updates (currently CSS only):
  new webpack.HotModuleReplacementPlugin(),
  // Watcher doesn't work well if you mistype casing in a path so we use
  // a plugin that prints an error when you attempt to do this.
  // See https://github.com/facebookincubator/create-react-app/issues/240
  new CaseSensitivePathsPlugin(),
  // If you require a missing module and then `npm install` it, you still have
  // to restart the development server for Webpack to discover it. This plugin
  // makes the discovery automatic so you don't have to restart.
  // See https://github.com/facebookincubator/create-react-app/issues/186
  new WatchMissingNodeModulesPlugin(paths.appNodeModules),
])
*/
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

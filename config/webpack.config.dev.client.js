'use strict';

const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const paths = require('./paths');

const base = require('./webpack.config.dev.base');

base.entry = [
  // Include an alternative client for WebpackDevServer. A client's job is to
  // connect to WebpackDevServer by a socket and get notified about changes.
  // When you save a file, the client will either apply hot updates (in case
  // of CSS changes), or refresh the page (in case of JS changes). When you
  // make a syntax error, this client will display a syntax error overlay.
  // Note: instead of the default WebpackDevServer client, we use a custom one
  // to bring better experience for Create React App users. You can replace
  // the line below with these two lines if you prefer the stock client:
  // require.resolve('webpack-dev-server/client') + '?/',
  // require.resolve('webpack/hot/dev-server'),
  require.resolve('react-dev-utils/webpackHotDevClient'),
  // We ship a few polyfills by default:
  require.resolve('./polyfills'),
  // Errors should be considered fatal in development
  require.resolve('react-error-overlay'),
  // Finally, this is your app's code:
  paths.appIndexJs,
  // We include the app code last so that if there is a runtime error during
  // initialization, it doesn't blow up the WebpackDevServer client, and
  // changing JS code would still trigger a refresh.
]

base.output = {
  // Next line is not used in dev but WebpackDevServer crashes without it:
  path: paths.appBuild,
  // Add /* filename */ comments to generated require()s in the output.
  pathinfo: true,
  // This does not produce a real file. It's just the virtual path that is
  // served by WebpackDevServer in development. This is the JS bundle
  // containing code from all our entry points, and the Webpack runtime.
  filename: 'static/js/bundle.js',
  // There are also additional JS chunk files if you use code splitting.
  chunkFilename: 'static/js/[name].chunk.js',
  // This is the URL that app is served from. We use "/" in development.
  publicPath: '/',
  // Point sourcemap entries to original disk location
  devtoolModuleFilenameTemplate: info =>
    path.resolve(info.absoluteResourcePath),
}

base.plugins = base.plugins.concat([
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

module.exports = base

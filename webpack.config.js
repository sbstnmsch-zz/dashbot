/* globals require, module */
var webpack = require('webpack');

module.exports = {
  target: 'web',
  debug: true,
  devtool: 'source-map',
  entry: {
    main: './app/javascript/ng-dashbot'
  },
  output: {
    path: './dist/javascript',
    filename: 'dashbot.bundle.js'
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  resolve: {
    alias: {
      angular: 'angular'
    },
    modulesDirectories: ['bower_modules', 'node_modules', 'app/javascript']
  },
  externals: {
  },
  module: {
    loaders: [
    { test: /\.css/, loader: 'style-loader!css-loader' },
    { test: /\.png/, loader: 'url-loader?limit=100000&mimetype=image/png' },
    { test: /\.gif/, loader: 'url-loader?limit=100000&mimetype=image/gif' },
    { test: /\.jpg/, loader: 'file-loader' },
    { test: /\.woff$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
    { test: /\.ttf$/, loader: 'file-loader' },
    { test: /\.eot$/, loader: 'file-loader' },
    { test: /\.svg$/, loader: 'file-loader' },
    { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};

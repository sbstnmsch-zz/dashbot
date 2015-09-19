/* globals require, module */
var webpack = require('webpack');

module.exports = {
  target: 'web',
  devtool: 'source-map',
  entry: {
    main: './app/javascript/ng-dashbot'
  },
  output: {
    path: './dist',
    filename: 'dashbot.bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'app/javascript']
  },
  externals: {
    angular: 'angular'
  },
  module: {
    loaders: [
    { test: /\.css/, loader: 'style-loader!css-loader' },
    { test: /\.png/, loader: 'url-loader?limit=100000&mimetype=image/png' },
    { test: /\.jpg/, loader: 'file-loader' },
    { test: /\.woff$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
    { test: /\.svg$/, loader: 'file-loader' },
    { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: false
    })
  ]
};

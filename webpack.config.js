var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
    },
  module: {
      loaders: [
          {
              exclude: /node_modules/,
              loader: 'babel'
          }
      ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  }
};

module.exports = config;

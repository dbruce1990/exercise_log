var webpack = require('webpack');
var path = require('path');

// //react app codebase
// var APP_DIR = path.resolve(__dirname, 'react-components');
// //bundle.js
// var BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
  entry: './react-components/App.jsx',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        presets: ['es2015', 'react']
      }
    ]
  }
};

module.exports = config;

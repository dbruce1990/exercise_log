const webpack = require('webpack');
const path = require('path');

const config = {
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

var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js')

var APP_DIR = path.resolve(__dirname, 'frontend');
var BUILD_DIR = path.resolve(__dirname, 'frontend-dist');

var config = merge(commonConfig, {
  mode: 'production',
  entry: ['babel-polyfill', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'app.js',
  },
});

module.exports = config

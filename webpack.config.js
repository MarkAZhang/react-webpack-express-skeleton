var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'front-end/dist');
var APP_DIR = path.resolve(__dirname, 'front-end/src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module : {
    loaders : [
      {
        test : /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-1'],
          plugins: ['react-require'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!postcss-loader',
        exclude: [/node_modules/],
      }
    ]
  }
}

module.exports = config
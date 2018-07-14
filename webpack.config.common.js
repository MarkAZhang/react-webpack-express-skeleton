var path = require('path');

var LIB_DIR = path.resolve(__dirname, 'frontend');

var config = {
  resolve: {
    alias: {
      '~': LIB_DIR
    }
  },
  module : {
    rules: [
      {
        test : /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!postcss-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [/node_modules/],
      },
      {
        test: /\.(png|svg|eot|woff2?|ttf|jpg|gif)/,
        loader: 'url-loader?limit=5000&publicPath=/static/',
      },
    ]
  }
}

module.exports = config

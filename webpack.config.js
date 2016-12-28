var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './src/script/coffee/application',
  output: {
    path: path.resolve('./build/webpack_bundles/'),
    publicPath: '/assets/',
    filename: '[name].js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.html$/, loader: "html-loader"},
      { test: /\.hbs/, loader: "handlebars-template-loader" },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.coffee'],
    alias: {
      marionette: 'backbone.marionette',
      underscore: 'lodash'
    }
  }

}

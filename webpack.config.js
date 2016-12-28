var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

  // The entry point ie. loading code for this marinonette application is in
  // src/script/coffee/application.coffee
  entry: './src/script/coffee/application',

  // All generated files are put in ./build/webpack_bundles
  output: {
    path: path.resolve('./build/webpack_bundles/'),
    publicPath: '/assets/',
    filename: '[name].js'
  },

  // Register plugins
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  // How to handle various types of files when building
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
    // allows use to require('test') instead of require('test.coffee')
    // make extension implicit in require
    extensions: ['', '.js', '.coffee'],

    // a few short-cuts in require
    alias: {
      marionette: 'backbone.marionette',
      underscore: 'lodash'
    }
  }

}

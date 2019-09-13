const webpack = require('webpack');
const path = require('path');
const loadersConf = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    // POLYFILL: Set up an ES6-ish environment
    // 'babel-polyfill',  // The entire babel-polyfill
    // Or pick es6 features needed (included into babel-polyfill)
    'core-js/fn/promise',
    'core-js/es6/object',
    'core-js/es6/array',

    './src/index.js',
    './src/styles/main.scss',
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      styles: path.resolve(__dirname, 'styles/'),
    },
  },
  module: {
    rules: loadersConf,
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      },
    }),
  ],
};

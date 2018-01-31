'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
    }),
  ],
}

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./index.js'],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          compact: false,
          presets: ['babel-preset-es2015'],
          plugins: ['babel-plugin-transform-node-env-inline'],
        },
      },
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'sass-loader',
        ],
      }),
    }],
  },
  output: {
    library: 'metal',
    libraryTarget: 'this',
    filename: './build/globals/wd-base.js',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      disable: false,
      filename: './build/commons.css',
      allChunks: true,
    }),
  ],
};

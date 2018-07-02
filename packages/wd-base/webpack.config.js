const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/main.scss'],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
    ],
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

module.exports = {
  entry: ['./src/demo.scss'],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  output: {
    library: 'metal',
    libraryTarget: 'this',
    filename: './build/globals/wd-base-demo.js',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      disable: false,
      filename: './demos/demo.css',
      allChunks: true,
    }),
  ],
};

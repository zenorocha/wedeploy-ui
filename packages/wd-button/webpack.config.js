const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: ['./src/WDButton.js'],
  module: {
    rules: [
      {
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['../../node_modules'],
            },
          },
        ],
      },
    ],
  },
  output: {
    library: 'metal',
    libraryTarget: 'this',
    filename: 'wd-button.js',
    path: __dirname + '/build/globals',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../main.css',
    }),
  ],
};

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: ['./src/main.scss'],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  output: {
    library: 'metal',
    libraryTarget: 'this',
    filename: 'wd-base.js',
    path: __dirname + '/build/globals',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../main.css',
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

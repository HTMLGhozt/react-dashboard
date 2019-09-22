const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelOptions = require('../babel.config.js');

const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(ROOT_DIR, './src'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_DIR, './dist'),
  },
  module: {
    rules: [
      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: false,
            },
          },
        ],
      },
      // js
      {
        test: /\.m?jsx?$/i,
        use: [
          {
            loader: 'babel-loader?presets[]=react',
            options: {
              ...babelOptions,
              cacheDirectory: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'testing',
      template: path.resolve(ROOT_DIR, './public/index.html'),
    }),
  ],
  resolve: {
    alias: {
      // The documentation for hot-loader notes that the production bundle
      // is the same as the default react-dom package:
      // https://github.com/hot-loader/react-dom
      'react-dom': '@hot-loader/react-dom',
    },
  },
};

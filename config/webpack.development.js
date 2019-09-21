const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = merge(common, {
  entry: ['react-hot-loader/patch', path.resolve(ROOT_DIR, './src')],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
  },
});

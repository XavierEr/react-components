const { resolve } = require('path');

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    port: 10000,
    static: resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: resolve(__dirname, 'babel.config.dev.json')
            }
          }
        ]
      },
      {
        test: /\.module\.(sc|sa)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new ReactRefreshPlugin()
  ]
});

module.exports = config;
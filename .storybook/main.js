const { resolve } = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const rules = config.module.rules;

    if (configType === 'DEVELOPMENT') {
      // return {
      //   ...config,
      //   module: {
      //     ...config.module,
      //     rules: webpackDevConfig.module.rules
      //   }
      // };

      rules.push(
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
      );

      config.plugins.push(new ReactRefreshPlugin());
    }

    if (configType === 'PRODUCTION') {
      // return {
      //   ...config,
      //   module: {
      //     ...config.module,
      //     rules: webpackProdConfig.module.rules
      //   },
      //   plugins: [
      //     new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['docs'] }),
      //     ...webpackProdConfig.plugins
      //   ]
      // };

      rules.push(
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                configFile: resolve(__dirname, 'babel.config.prod.json')
              }
            }
          ]
        },
        {
          test: /\.module\.(sc|sa)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { modules: true, importLoaders: 2 } },
            'postcss-loader',
            'sass-loader'
          ]
        }
      );

      config.plugins.push(new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['docs'] }));
      config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].css', chunkFilename: '[id].[contenthash:8].css' }));
    }

    // Return the altered config
    return config;
  },
}
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
  const isAnalize = env && env.anlz ? new BundleAnalyzerPlugin() : [];

  return {
    devtool: 'source-map',
    entry: {
      app: './client/src',
      vendor: [
        'babel-polyfill',
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
        'moment',
        'axios',
        './.modernizrrc'
      ]
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.scss'],
      modules: [
        'node_modules'
      ],
      alias: {
        modernizr$: path.resolve(__dirname, '../.modernizrrc'),
        settings: path.resolve(__dirname, '../client/src/general/scss/settings/index.scss')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread'
              ],
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader'
        },
        {
          test: /\.modernizrrc(\.json)?$/,
          use: ['modernizr-loader', 'json-loader']
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          exclude: /svg[\/\\]/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        },
        {
          test: /\.svg$/,
          include: /svg[\/\\]/,
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin('dist', {
        root: path.resolve(__dirname, '..')
      }),
      new HtmlWebpackPlugin({
        template: './client/public/index.html'
      }),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
      new webpack.NamedModulesPlugin(),
      new webpack.NamedChunksPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      })
    ].concat(isAnalize),
    stats: {
      children: false
    }
  };
};

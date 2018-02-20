const webpack = require('webpack');
const path = require('path');

module.exports = env => {
  console.log('::-->>__SERVER__<<--::');

  return {
    devServer: {
      port: 1515,
      publicPath: '/',
      hot: true,
      open: true,
      overlay: {
        errors: true
      },
      stats: {
        children: false
      }
    },
    output: {
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};

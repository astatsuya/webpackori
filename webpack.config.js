const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebpackPlugin({
  // inject: 'body'
  template: './public/index.html',
  filename: './index.html'
});

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64]'
            }
          },
          {
            loader: 'sass-loader'
            // options: {
            // modules: true,
            // localIdentName: "[name]_[local]_[hash:base64]",
            // }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: 'source-map',
  devServer: {
    overlay: true
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [htmlPlugin, new webpack.HotModuleReplacementPlugin()]
};

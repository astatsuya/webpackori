const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebpackPlugin({
  title: "jtite",
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'production',
  entry: ['react-hot-loader/patch', './src/index.js'],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    compress: true,
    hot: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel']
      }
    // rules: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     exclude: /node_modules/,
    //     loader: 'babel-loader'
    //   }
    ]
  },
  plugins: [
    // htmlPlugin,
    // new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

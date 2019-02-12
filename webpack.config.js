const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});


module.exports = {
  mode: 'production',
  // entry: ['react-hot-loader/patch', './src/index.js'],
  entry: './src/index.js',
  // devServer: {
  //   contentBase: path.join(__dirname, 'public'),
  //   port: 3000,
  //   compress: true,
  //   hot: true,
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       loaders: ['react-hot-loader/webpack', 'babel-loader']
  //     },
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
              options: {
              // modules: true,
              // importLoaders: 1,
              // localIdentName: "[name]_[local]_[hash:base64]",
              // sourceMap: true,
              // minimize: true
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    htmlPlugin,
    new webpack.HotModuleReplacementPlugin(),
    // miniCssPlugin
  ]
};

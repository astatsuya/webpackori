const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  },
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
      }
    ]
  }
};

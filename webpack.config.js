const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [ 
          path.resolve(__dirname, 'src/'), 
          path.resolve(__dirname, 'gl/src'),
          path.resolve(__dirname, 'aud/src')
        ],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
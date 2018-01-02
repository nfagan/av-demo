const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './examples/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [ 
          path.resolve(__dirname, 'examples/'), 
          path.resolve(__dirname, 'gl/'),
          path.resolve(__dirname, 'aud/')
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
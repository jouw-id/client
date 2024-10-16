const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'jouwid': './src/browser.mjs',
  },
  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  module: {

    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
          fallback: {
              "crypto": require.resolve("crypto-browserify"),
              "stream": [
                require.resolve("vm-browserify"),
                require.resolve("stream-browserify")
              ],
              "vm":require.resolve("vm-browserify"),
              "url": require.resolve("url"),
            }
        },
      },
    ]
  }
};
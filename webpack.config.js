var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
  'react', 'faker', 'lodash', 'redux', 'react-redux',
  'react-dom', 'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js', // application codes
    vendor: VENDOR_LIBS // npm modules
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js' // generate files based on 'entry's keys
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // prevent duplicate codes in bundle and vendor
    })
  ]
};

const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts', // bundle"s entry point
  output: {
    path: path.resolve(__dirname, '../../dist/vanilla-js-app'), // output directory
    filename: '[name].js', // name of the generated bundle
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // this will inject script tab with the correct js bundle src path in body
      template: './src/index.html',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env.HELLO_WORLD_CONTRACT_ADDRESS': JSON.stringify(
        process.env.HELLO_WORLD_CONTRACT_ADDRESS,
      ),
      'process.env.COUNTER_CONTRACT_ADDRESS': JSON.stringify(
        process.env.COUNTER_CONTRACT_ADDRESS,
      ),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    }),
  ],
  watch: true,
  devServer: {
    historyApiFallback: true,
    port: 9001,
  },
};

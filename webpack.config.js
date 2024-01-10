const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
 devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
        directory: path.join(__dirname, "public")
    },
    port: 9022, // default 8000
  }
};
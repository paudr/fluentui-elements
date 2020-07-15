const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')

module.exports = {
  mode: 'production',
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
    library: 'fluentuiWC',
    filename: 'fluentui-wc.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version)
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)(?!(\\|\/)(lit-element|lit-html))/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
}

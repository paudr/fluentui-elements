const webpack = require('webpack')
const babelrc = require('../.babelrc.json')
const packageJson = require('../package.json')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(packageJson.version)
      })
    )
    return config
  }
}

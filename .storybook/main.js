const babelrc = require('../.babelrc.json')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-knobs'
  ]
}

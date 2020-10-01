import React from 'react'
import { configure } from '@storybook/web-components'
import {
  Title,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'
import './assets/fonts.css'

const storiesModule = require.context('../src/', true, /\.stories\.js$/)
configure(storiesModule, module)

if (module.hot) {
  module.hot.accept(storiesModule.id, () => {
    const currentLocationHref = window.location.href
    window.history.pushState(null, null, currentLocationHref)
    window.location.reload()
  })
}

export const parameters = {
  options: {
    storySort: {
      order: [
        'Basic Inputs',
        'Galleries & Pickers',
        'Items & Lists',
        'Surfaces',
        'Commands, Menus & Navs',
        'Progress',
        'Utilities',
        'Base Types'
      ]
    }
  },
  docs: {
    page() {
      return React.createElement(
        'div',
        null,
        React.createElement(Title),
        React.createElement(Primary),
        React.createElement(ArgsTable, { story: PRIMARY_STORY })
      )
    }
  }
}

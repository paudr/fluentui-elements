import { configure } from '@storybook/web-components'
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
  }
}

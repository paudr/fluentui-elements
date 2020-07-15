import { configure, addParameters } from '@storybook/web-components'

addParameters({ docs: { iframeHeight: '200px' } })

const storiesModule = require.context(
  '../src/component/',
  true,
  /\.stories\.js$/
)
configure(storiesModule, module)

if (module.hot) {
  module.hot.accept(storiesModule.id, () => {
    const currentLocationHref = window.location.href
    window.history.pushState(null, null, currentLocationHref)
    window.location.reload()
  })
}

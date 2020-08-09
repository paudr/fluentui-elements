import { html } from 'lit-html'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './tag-picker'
import iconCode from '../icon/code'

const container = story => html`
  <div
    tabindex="0"
    @keydown="${event => event.stopPropagation()}"
    style="outline: 0"
  >
    ${story()}
  </div>
`

export default {
  title: 'TagPicker',
  component: 'fluent-tag-picker',
  decorators: [container, withKnobs]
}

const iconItems = Object.keys(iconCode).map(name => ({
  text: name,
  value: [name]
}))

function getMockRest (options) {
  return function mockRest (text) {
    return new Promise(resolve => {
      const lower = text.toLowerCase()
      const items = options.filter(item =>
        item.text.toLowerCase().startsWith(lower)
      )
      setTimeout(() => resolve(items), Math.random() * 700 + 50)
    })
  }
}

export const Sandbox = () => html`
  <fluent-tag-picker
    .label="${text('label', 'Standard')}"
    .description="${text('description', '')}"
    .invalid="${boolean('invalid', false)}"
    .errorMessage="${text('errorMessage', '')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .borderless="${boolean('borderless', false)}"
    .underlined="${boolean('underlined', false)}"
    .open="${boolean('open', false)}"
    .loadingText="${text('loadingText', 'Carregant')}"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="${number('getItemsRate', 250)}"
    .accentInsensitive="${boolean('accentInsensitive', false)}"
    .maxSelectedItems="${number('maxSelectedItems', -1)}"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

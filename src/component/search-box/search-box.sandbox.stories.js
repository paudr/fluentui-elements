import { html } from 'lit-html'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './search-box'
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
  title: 'SearchBox/Basic',
  component: 'fluent-search-box',
  decorators: [container, withKnobs]
}

const iconOptions = Object.keys(iconCode).reduce(
  (object, name) => Object.assign(object, { [name]: name }),
  { None: '' }
)

export const Sandbox = () =>
  html`<fluent-search-box
    .label="${text('label', 'Standard')}"
    .description="${text('description', '')}"
    .invalid="${boolean('invalid', false)}"
    .errorMessage="${text('errorMessage', '')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .borderless="${boolean('borderless', false)}"
    .underlined="${boolean('underlined', false)}"
    .icon="${select('icon', iconOptions, 'Search')}"
    .placeholder="${text('placeholder', 'Search')}"
    .disableAnimation="${boolean('disableAnimation', false)}"
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

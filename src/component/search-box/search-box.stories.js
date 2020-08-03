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
  title: 'SearchBox',
  component: 'fluent-search-box',
  decorators: [container, withKnobs]
}

const iconOptions = Object.keys(iconCode).reduce(
  (object, name) => Object.assign(object, { [name]: name }),
  { None: '' }
)

export const Normal = () =>
  html`<fluent-search-box
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

export const WithLabel = () =>
  html`<fluent-search-box
    label="Query string:"
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

export const NoAnimations = () =>
  html`<fluent-search-box
    disableAnimation
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

export const CustomIcon = () =>
  html`<fluent-search-box
    icon="Filter"
    placeholder="Filter"
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

export const Underlined = () =>
  html`<fluent-search-box
    underlined
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

export const Disabled = () =>
  html`<fluent-search-box
    disabled
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

export const UnderlinedAndDisabled = () =>
  html`<fluent-search-box
    underlined
    disabled
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

export const Sandbox = () =>
  html`<fluent-search-box
    .icon="${select('icon', iconOptions, 'Search')}"
    .placeholder="${text('placeholder', 'Search')}"
    .disableAnimation="${boolean('disableAnimation', false)}"
    .underlined="${boolean('underlined', false)}"
    .disabled="${boolean('disabled', false)}"
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

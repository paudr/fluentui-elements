import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './search-box'

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
  decorators: [container]
}

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

export const WithDescription = () =>
  html`<fluent-search-box
    description="A fancy description."
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

export const Invalid = () =>
  html`<fluent-search-box
    invalid
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

export const WithErrorMessage = () =>
  html`<fluent-search-box
    errorMessage="Error message"
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

export const Required = () => html`
  <style>
    fluent-search-box {
      width: 250px;
    }
  </style>
  <p>
    <fluent-search-box
      label="Required"
      required
      @change="${action('change')}"
      @input="${action('input')}"
      @search="${action('search')}"
      @escape="${action('escape')}"
    ></fluent-search-box>
  </p>
  <p>
    <fluent-search-box
      required
      @change="${action('change')}"
      @input="${action('input')}"
      @search="${action('search')}"
      @escape="${action('escape')}"
    ></fluent-search-box>
  </p>
`
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

export const Borderless = () =>
  html`<fluent-search-box
    borderless
    @change="${action('change')}"
    @input="${action('input')}"
    @search="${action('search')}"
    @escape="${action('escape')}"
  ></fluent-search-box>`

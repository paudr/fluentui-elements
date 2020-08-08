import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './spin-button'

const container = story => html`
  <div
    tabindex="0"
    style="outline: 0"
    @keydown="${event => event.stopPropagation()}"
  >
    ${story()}
  </div>
`

export default {
  title: 'SpinButton/Underlined',
  component: 'fluent-spin-button',
  decorators: [container]
}

export const Normal = () => html`
  <fluent-spin-button
    underlined
    label="Standard"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const WithDescription = () => html`
  <fluent-spin-button
    underlined
    label="Standard"
    description="A fancy description."
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const Invalid = () => html`
  <fluent-spin-button
    underlined
    invalid
    label="Invalid"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const WithErrorMessage = () => html`
  <fluent-spin-button
    underlined
    label="Invalid"
    errorMessage="Error message"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const Disabled = () => html`
  <fluent-spin-button
    underlined
    label="Disabled"
    value="42"
    disabled
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const Required = () => html`
  <style>
    fluent-spin-button {
      width: 250px;
    }
  </style>
  <p>
    <fluent-spin-button
      underlined
      label="Required"
      required
      @change="${action('change')}"
    ></fluent-spin-button>
  </p>
  <p>
    <fluent-spin-button
      underlined
      required
      @change="${action('change')}"
    ></fluent-spin-button>
  </p>
`

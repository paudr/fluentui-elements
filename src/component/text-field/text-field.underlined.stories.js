import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './text-field'

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
  title: 'TextField/Underlined',
  component: 'fluent-text-field',
  decorators: [container]
}

export const Normal = () => html`
  <fluent-text-field
    underlined
    label="Standard"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithDescription = () => html`
  <fluent-text-field
    underlined
    label="Standard"
    description="A fancy description."
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const Invalid = () => html`
  <fluent-text-field
    underlined
    invalid
    label="Invalid"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithErrorMessage = () => html`
  <fluent-text-field
    underlined
    label="With error message"
    errorMessage="Error message"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const Disabled = () => html`
  <fluent-text-field
    underlined
    label="Disabled"
    disabled
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const Required = () => html`
  <style>
    fluent-text-field {
      width: 250px;
    }
  </style>
  <p>
    <fluent-text-field
      underlined
      label="Required"
      required
      @focus="${action('focus')}"
      @blur="${action('blur')}"
      @input="${action('input')}"
      @change="${action('change')}"
    ></fluent-text-field>
  </p>
  <p>
    <fluent-text-field
      underlined
      required
      @focus="${action('focus')}"
      @blur="${action('blur')}"
      @input="${action('input')}"
      @change="${action('change')}"
    ></fluent-text-field>
  </p>
`

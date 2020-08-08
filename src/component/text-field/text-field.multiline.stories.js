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
  title: 'TextField/Multiline',
  component: 'fluent-text-field',
  decorators: [container]
}

export const Normal = () => html`
  <fluent-text-field
    multiline
    label="Standard"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithDescription = () => html`
  <fluent-text-field
    multiline
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
    multiline
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
    multiline
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
    multiline
    label="Disabled"
    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
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
      multiline
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
      multiline
      required
      @focus="${action('focus')}"
      @blur="${action('blur')}"
      @input="${action('input')}"
      @change="${action('change')}"
    ></fluent-text-field>
  </p>
`

export const MaxLength = () => html`
  <fluent-text-field
    multiline
    label="Max length (20)"
    maxlength="20"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const NonResizable = () => html`
  <fluent-text-field
    multiline
    label="Non-resizable"
    unresizable
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithAutoAdjustingHeight = () => html`
  <fluent-text-field
    multiline
    label="With auto adjusting height"
    autoAdjustHeight
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithAnIcon = () => html`
  <fluent-text-field
    multiline
    label="With an icon"
    icon="Edit"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const BorderlessMultiline = () => html`
  <fluent-text-field
    borderless
    multiline
    label="Borderless multi-line TextField"
    placeholder="No borders here, forks."
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './text-field'

const container = story => html`
  <div tabindex="0" @keydown="${event => event.stopPropagation()}">
    ${story()}
  </div>
`

export default {
  title: 'TextField/Variants',
  component: 'fluent-text-field',
  decorators: [container]
}

export const Underlined = () => html`
  <fluent-text-field
    underlined
    label="Standard"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const UnderlinedDisabled = () => html`
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

export const UnderlinedRequired = () => html`
  <fluent-text-field
    underlined
    label="Required"
    required
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const UnderlinedErrorMessage = () => html`
  <fluent-text-field
    underlined
    label="Required"
    errorMessage="Error message"
    required
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const Borderless = () => html`
  <fluent-text-field
    borderless
    label="Borderless single-line TextField"
    placeholder="No borders here, forks."
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

export const WithPrefix = () => html`
  <fluent-text-field
    prefix="https://"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithPrefixDisabled = () => html`
  <fluent-text-field
    prefix="https://"
    disabled
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithSufix = () => html`
  <fluent-text-field
    sufix=".com"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithPrefixAndSufix = () => html`
  <fluent-text-field
    prefix="https://"
    sufix=".com"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

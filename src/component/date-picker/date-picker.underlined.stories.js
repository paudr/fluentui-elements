import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './date-picker'

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
  title: 'DatePicker/Underlined',
  component: 'fluent-date-picker',
  decorators: [container]
}

export const Normal = () => html`
  <fluent-date-picker
    underlined
    label="Date Picker"
    goToday="Avui"
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const WithDescription = () => html`
  <fluent-date-picker
    underlined
    label="Standard"
    goToday="Avui"
    description="Dia de naixement"
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const Invalid = () => html`
  <fluent-date-picker
    underlined
    invalid
    label="Invalid"
    goToday="Avui"
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const WithErrorMessage = () => html`
  <fluent-date-picker
    underlined
    label="With error message"
    goToday="Avui"
    errorMessage="With error message"
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const Disabled = () => html`
  <fluent-date-picker
    underlined
    disabled
    label="Disabled"
    goToday="Avui"
    .value="${new Date(1642, 11, 25)}"
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const Required = () => html`
  <style>
    fluent-date-picker {
      width: 250px;
    }
  </style>
  <p>
    <fluent-date-picker
      underlined
      required
      label="Required"
      goToday="Avui"
      @change="${action('change')}"
    ></fluent-date-picker>
  </p>
  <p>
    <fluent-date-picker
      underlined
      required
      goToday="Avui"
      @change="${action('change')}"
    ></fluent-date-picker>
  </p>
`

export const NotWritable = () => html`
  <fluent-date-picker
    underlined
    label="Not Writable Date Picker"
    goToday="Avui"
    notWritable
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const WithPlaceholder = () => html`
  <fluent-date-picker
    underlined
    label="Date Picker With Placeholder"
    goToday="Avui"
    placeholder="dia/mes/any"
    @change="${action('change')}"
  ></fluent-date-picker>
`

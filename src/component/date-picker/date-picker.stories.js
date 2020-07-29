import { html } from 'lit-html'
import { withKnobs, number, text, date, boolean } from '@storybook/addon-knobs'
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
  title: 'DatePicker',
  component: 'fluent-date-picker',
  decorators: [container, withKnobs]
}

function myDateKnob (name, defaultValue) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

export const Normal = () => html`
  <fluent-date-picker
    label="Date Picker"
    goToday="Avui"
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const NotWritable = () => html`
  <fluent-date-picker
    label="Not Writable Date Picker"
    goToday="Avui"
    notWritable
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const Required = () => html`
  <fluent-date-picker
    label="Required Date Picker"
    goToday="Avui"
    required
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const Disabled = () => html`
  <fluent-date-picker
    .value="${new Date(1642, 11, 25)}"
    label="Disabled Date Picker"
    goToday="Avui"
    disabled
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const WithDescription = () => html`
  <fluent-date-picker
    label="Date Picker With Description"
    goToday="Avui"
    description="Dia de naixement"
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const WithPlaceholder = () => html`
  <fluent-date-picker
    label="Date Picker With Placeholder"
    goToday="Avui"
    placeholder="dia/mes/any"
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const WithErrorMessage = () => html`
  <fluent-date-picker
    label="Date Picker With Error Message"
    goToday="Avui"
    errorMessage="With error message"
    @change="${action('change')}"
  ></fluent-date-picker>
`

export const Sandbox = () => html`
  <fluent-date-picker
    .label="${text('label', 'Avui')}"
    .today="${myDateKnob('today', new Date())}"
    .firstDayOfTheWeek="${number('firstDayOfTheWeek', 1, {
      min: 0,
      max: 6,
      step: 1
    })}"
    .goToday="${text('goToday', 'Avui')}"
    .notWritable="${boolean('notWritable', false)}"
    .required="${boolean('required', false)}"
    .disabled="${boolean('disabled', false)}"
    .description="${text('description', '')}"
    .placeholder="${text('placeholder', '')}"
    .errorMessage="${text('errorMessage', '')}"
    @change="${action('change')}"
  ></fluent-date-picker>
`

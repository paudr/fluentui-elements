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

export const Sandbox = () => html`
  <fluent-date-picker
    .label="${text('label', 'Standard')}"
    .description="${text('description', '')}"
    .invalid="${boolean('invalid', false)}"
    .errorMessage="${text('errorMessage', '')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .borderless="${boolean('borderless', false)}"
    .underlined="${boolean('underlined', false)}"
    .open="${boolean('open', false)}"
    .today="${myDateKnob('today', new Date())}"
    .firstDayOfTheWeek="${number('firstDayOfTheWeek', 1, {
      min: 0,
      max: 6,
      step: 1
    })}"
    .goToday="${text('goToday', 'Avui')}"
    .notWritable="${boolean('notWritable', false)}"
    .placeholder="${text('placeholder', '')}"
    @change="${action('change')}"
  ></fluent-date-picker>
`

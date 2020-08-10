import { html } from 'lit-html'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './combo-box'
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
  title: 'ComboBox',
  component: 'fluent-combo-box',
  decorators: [container, withKnobs]
}

const iconOptions = Object.keys(iconCode).map(name => ({
  text: name,
  value: [name]
}))

export const Sandbox = () => html`
  <fluent-combo-box
    .label="${text('label', 'Standard')}"
    .description="${text('description', '')}"
    .invalid="${boolean('invalid', false)}"
    .errorMessage="${text('errorMessage', '')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .borderless="${boolean('borderless', false)}"
    .underlined="${boolean('underlined', false)}"
    .open="${boolean('open', false)}"
    .readOnly="${boolean('readOnly', false)}"
    .multiple="${boolean('multiple', false)}"
    .allowFreeform="${boolean('allowFreeform', false)}"
    .autoComplete="${boolean('autoComplete', false)}"
    .options="${object('options', iconOptions)}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`
Sandbox.story = {
  parameters: {
    knobs: {
      timestamps: true,
      escapeHTML: false
    }
  }
}

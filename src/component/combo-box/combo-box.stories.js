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

/*
const fruitOptions = [
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Mango', value: 'mango' },
  { text: 'Orange', value: 'orange' },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Grape', value: 'grape' }
]
*/

export const Sandbox = () => html`
  <fluent-combo-box
    .label="${text('label', 'Standard')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .readOnly="${boolean('readOnly', false)}"
    .multiple="${boolean('multiple', false)}"
    .allowFreeform="${boolean('allowFreeform', false)}"
    .autoComplete="${boolean('autoComplete', false)}"
    .placeholder="${text('placeholder', '')}"
    .errorMessage="${text('errorMessage', '')}"
    .open="${boolean('open', false)}"
    .options="${object('options', iconOptions)}"
    .selectedIndex="${object('selectedIndex', null)}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
    @click:icon="${action('click:icon')}"
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

/*
    .description="${text('description', '')}"
    .placeholder="${text('placeholder', 'Please enter text here')}"
    .prefix="${text('prefix', '')}"
    .sufix="${text('sufix', '')}"
    .multiline="${boolean('multiline', false)}"
    .underlined="${boolean('underlined', false)}"
    .borderless="${boolean('borderless', false)}"
    .readonly="${boolean('readonly', false)}"
    .unresizable="${boolean('unresizable', false)}"
    .autoAdjustHeight="${boolean('autoAdjustHeight', false)}"
*/

import { html } from 'lit-html'
import {
  withKnobs,
  text,
  boolean,
  select,
  number
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './text-field'
import iconCode from '../icon/code'

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
  title: 'TextField',
  component: 'fluent-text-field',
  decorators: [container, withKnobs]
}

const iconOptions = Object.keys(iconCode).reduce(
  (object, name) => Object.assign(object, { [name]: name }),
  { None: '' }
)

export const Sandbox = () => html`
  <fluent-text-field
    .label="${text('label', 'Standard')}"
    .description="${text('description', '')}"
    .invalid="${boolean('invalid', false)}"
    .errorMessage="${text('errorMessage', '')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .borderless="${boolean('borderless', false)}"
    .underlined="${boolean('underlined', false)}"
    .value="${text('value', '')}"
    .placeholder="${text('placeholder', 'Please enter text here')}"
    .prefix="${text('prefix', '')}"
    .sufix="${text('sufix', '')}"
    .icon="${select('icon', iconOptions, '')}"
    .readonly="${boolean('readonly', false)}"
    .maxlength="${number('maxlength', null)}"
    .multiline="${boolean('multiline', false)}"
    .unresizable="${boolean('unresizable', false)}"
    .autoAdjustHeight="${boolean('autoAdjustHeight', false)}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
    @click:icon="${action('click:icon')}"
  ></fluent-text-field>
`
Sandbox.story = {
  parameters: {
    knobs: {
      timestamps: true,
      escapeHTML: false
    }
  }
}

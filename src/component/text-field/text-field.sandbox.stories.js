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
    @keydown="${event => event.stopPropagation()}"
    style="outline: 0"
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
    .value="${text('value', '')}"
    .label="${text('label', 'Standard')}"
    .description="${text('description', '')}"
    .placeholder="${text('placeholder', 'Please enter text here')}"
    .prefix="${text('prefix', '')}"
    .sufix="${text('sufix', '')}"
    .multiline="${boolean('multiline', false)}"
    .underlined="${boolean('underlined', false)}"
    .borderless="${boolean('borderless', false)}"
    .icon="${select('icon', iconOptions, '')}"
    .errorMessage="${text('errorMessage', '')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .readonly="${boolean('readonly', false)}"
    .maxlength="${number('maxlength', null)}"
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

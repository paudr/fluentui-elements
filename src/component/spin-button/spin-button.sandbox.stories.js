import { html } from 'lit-html'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './spin-button'

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
  title: 'SpinButton',
  component: 'fluent-spin-button',
  decorators: [container, withKnobs]
}

export const Sandbox = () => html`
  <fluent-spin-button
    .label="${text('label', 'Standard')}"
    .description="${text('description', '')}"
    .invalid="${boolean('invalid', false)}"
    .errorMessage="${text('errorMessage', '')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .borderless="${boolean('borderless', false)}"
    .underlined="${boolean('underlined', false)}"
    .step="${number('step', 1)}"
    @change="${action('change')}"
  ></fluent-spin-button>
`

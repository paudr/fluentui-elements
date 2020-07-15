import { html } from 'lit-html'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './button'
import iconCode from '../icon/code'

export default {
  title: 'Button',
  component: 'fluent-button',
  decorators: [withKnobs]
}

const typeOptions = {
  Default: 'default',
  Compound: 'compound',
  Icon: 'icon',
  Action: 'action',
  Command: 'command'
}

const iconOptions = Object.keys(iconCode).reduce(
  (object, name) => Object.assign(object, { [name]: name }),
  { None: '' }
)

export const Sandbox = () => html`
  <fluent-button
    .type="${select('type', typeOptions, 'Default')}"
    .primary="${boolean('primary', false)}"
    .disabled="${boolean('disabled', false)}"
    .checked="${boolean('checked', false)}"
    .text="${text('text', 'Click me!')}"
    .secondaryText="${text('secondaryText', '')}"
    .icon="${select('icon', iconOptions, '')}"
    .href="${text('href', '')}"
    .target="${text('target', '')}"
    @click="${action('click')}"
  ></fluent-button>
`
Sandbox.story = {
  parameters: {
    knobs: {
      timestamps: true,
      escapeHTML: false
    }
  }
}

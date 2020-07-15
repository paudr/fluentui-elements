import { html } from 'lit-html'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import './label'

export default {
  title: 'Label',
  component: 'fluent-label',
  decorators: [withKnobs]
}

export const Normal = () => html`<fluent-label>I'm a Label</fluent-label>`

export const Required = () =>
  html` <fluent-label required>I'm a required Label</fluent-label> `

export const Disabled = () =>
  html` <fluent-label disabled>I'm a disabled Label</fluent-label> `

export const RequiredDisabled = () =>
  html` <fluent-label required disabled>I'm a disabled Label</fluent-label> `

export const Sandbox = () => html`
  <fluent-label
    ?required="${boolean('required', false)}"
    ?disabled="${boolean('disabled', false)}"
  >
    ${text('text', "I'm a Label")}
  </fluent-label>
`
Sandbox.story = {
  parameters: {
    knobs: {
      timestamps: true,
      escapeHTML: false
    }
  }
}

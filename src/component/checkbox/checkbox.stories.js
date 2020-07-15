import { html } from 'lit-html'
import {
  withKnobs,
  text,
  boolean,
  select,
  object
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './checkbox'

export default {
  title: 'Checkbox',
  component: 'fluent-checkbox',
  decorators: [withKnobs]
}

export const Normal = () => html`
  <fluent-checkbox
    label="Checkbox"
    @change="${action('change')}"
  ></fluent-checkbox>
`

export const Checked = () => html`
  <fluent-checkbox
    checked
    label="Checkbox"
    @change="${action('change')}"
  ></fluent-checkbox>
`

export const Disabled = () => html`
  <fluent-checkbox
    label="Disabled checkbox"
    disabled
    @change="${action('change')}"
  ></fluent-checkbox>
`

export const DisabledChecked = () => html`
  <fluent-checkbox
    label="Disabled checkbox"
    disabled
    checked
    @change="${action('change')}"
  ></fluent-checkbox>
`

export const Indeterminate = () => html`
  <fluent-checkbox
    indeterminate
    label="Indeterminate checkbox"
    @change="${action('change')}"
  ></fluent-checkbox>
`

export const IndeterminateDefaultChecked = () => html`
  <fluent-checkbox
    indeterminate
    defaultChecked
    label="Indeterminate checkbox which defaults to true when clicked"
    @change="${action('change')}"
  ></fluent-checkbox>
`

export const IndeterminateDisabled = () => html`
  <fluent-checkbox
    indeterminate
    disabled
    label="Indeterminate checkbox"
    @change="${action('change')}"
  ></fluent-checkbox>
`

function alertValue (event) {
  const checkbox = event.target.ownerDocument.getElementById('sandbox')
  alert(checkbox.value)
}

export const Sandbox = () => html`
  <fluent-checkbox
    id="sandbox"
    .checked="${boolean('checked', false)}"
    .label="${text('label', 'Checkbox')}"
    .boxSide="${select('boxSide', ['start', 'end'], 'start')}"
    .disabled="${boolean('disabled', false)}"
    .indeterminate="${boolean('indeterminate', false)}"
    .defaultChecked="${boolean('defaultChecked', false)}"
    .valueTrue="${object('valueTrue', 1)}"
    .valueFalse="${object('valueFalse', 0)}"
    @change="${action('change')}"
  ></fluent-checkbox>
  <p>
    <fluent-button
      text="Alert value"
      @click="${alertValue}"
    ><fluent-button>
  </p>
`
Sandbox.story = {
  parameters: {
    knobs: {
      timestamps: true,
      escapeHTML: false
    }
  }
}

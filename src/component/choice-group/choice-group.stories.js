import { html } from 'lit-html'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './choice-group'

export default {
  title: 'ChoiceGroup',
  component: 'fluent-choice-group',
  decorators: [withKnobs]
}

const choiceOptions = [
  { value: 'A', text: 'Option A' },
  { value: 'B', text: 'Option B' },
  { value: 'C', text: 'Option C', disabled: true },
  { value: 'D', text: 'Option D' }
]

export const Normal = () => html`
  <fluent-choice-group
    label="Pick one"
    .options="${choiceOptions}"
    @change="${action('change')}"
  ></fluent-choice-group>
`

export const Required = () => html`
  <fluent-choice-group
    label="Pick one"
    .options="${choiceOptions}"
    required
    @change="${action('change')}"
  ></fluent-choice-group>
`

export const Disabled = () => html`
  <fluent-choice-group
    label="Pick one"
    .options="${choiceOptions}"
    disabled
    @change="${action('change')}"
  ></fluent-choice-group>
`

export const InRow = () => html`
  <fluent-choice-group
    label="Pick one"
    .options="${choiceOptions}"
    inRow
    @change="${action('change')}"
  ></fluent-choice-group>
`

export const Sandbox = () => html`
  <fluent-choice-group
    .value="${text('value', 'C')}"
    .label="${text('label', 'Pick one')}"
    .required="${boolean('required', false)}"
    .disabled="${boolean('disabled', false)}"
    .inRow="${boolean('inRow', false)}"
    .options="${object('options', choiceOptions)}"
    @change="${action('change')}"
  ></fluent-choice-group>
`

import { html } from 'lit-html'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './toggle'

export default {
  title: 'Toggle',
  component: 'fluent-toggle',
  decorators: [withKnobs]
}

export const EnabledAndChecked = () => html`
  <fluent-toggle
    checked
    label="Enabled and checked"
    onText="On"
    offText="Off"
    @change="${action('change')}"
  ></fluent-toggle>
`

export const EnabledAndUnchecked = () => html`
  <fluent-toggle
    label="Enabled and unchecked"
    onText="On"
    offText="Off"
    @change="${action('change')}"
  ></fluent-toggle>
`

export const DisabledAndChecked = () => html`
  <fluent-toggle
    disabled
    checked
    label="Disabled and checked"
    onText="On"
    offText="Off"
    @change="${action('change')}"
  ></fluent-toggle>
`

export const DisabledAndUnchecked = () => html`
  <fluent-toggle
    disabled
    label="Disabled and unchecked"
    onText="On"
    offText="Off"
    @change="${action('change')}"
  ></fluent-toggle>
`

export const WithoutText = () => html`
  <fluent-toggle
    label="With whitout text"
    @change="${action('change')}"
  ></fluent-toggle>
`

export const WithInlineLabel = () => html`
  <fluent-toggle
    inline
    label="With inline label"
    onText="On"
    offText="Off"
    @change="${action('change')}"
  ></fluent-toggle>
`

export const DisabledWithInlineLabel = () => html`
  <fluent-toggle
    inline
    disabled
    label="Disabled With inline label"
    onText="On"
    offText="Off"
    @change="${action('change')}"
  ></fluent-toggle>
`

export const WithInlineLabelAndWithoutOnTextAndOffText = () => html`
  <fluent-toggle
    inline
    label="With inline label and without onText and offText"
    @change="${action('change')}"
  ></fluent-toggle>
`

export const DisabledWithInlineLabelAndWithoutOnTextAndOffText = () => html`
  <fluent-toggle
    inline
    disabled
    label="Disabled With inline label and without onText and offText"
    @change="${action('change')}"
  ></fluent-toggle>
`

export const Sandbox = () => html`
  <fluent-toggle
    .checked="${boolean('checked', false)}"
    .label="${text('label', 'Label')}"
    .onText="${text('onText', '')}"
    .offText="${text('offText', '')}"
    .inline="${boolean('inline', false)}"
    .disabled="${boolean('disabled', false)}"
    @change="${action('change')}"
  ></fluent-toggle>
`

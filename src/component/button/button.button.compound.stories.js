import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './button'

export default {
  title: 'Button/Button/Compound',
  component: 'fluent-button'
}

export const Standard = () => html`
  <fluent-button
    type="compound"
    text="Standard"
    secondaryText="This is the secondary text."
    @click="${action('click')}"
  />
`

export const Primary = () => html`
  <fluent-button
    type="compound"
    primary
    text="Primary"
    secondaryText="This is the secondary text."
    @click="${action('click')}"
  />
`

export const Checked = () => html`
  <fluent-button
    type="compound"
    checked
    text="Checked"
    secondaryText="This is the secondary text."
    @click="${action('click')}"
  />
`

export const PrimaryChecked = () => html`
  <fluent-button
    type="compound"
    primary
    checked
    text="Primary Checked"
    secondaryText="This is the secondary text."
    @click="${action('click')}"
  />
`

export const Disabled = () => html`
  <fluent-button
    disabled
    type="compound"
    text="Standard"
    secondaryText="This is the secondary text."
    @click="${action('click')}"
  />
`

export const DisabledPrimary = () => html`
  <fluent-button
    disabled
    type="compound"
    primary
    text="Primary"
    secondaryText="This is the secondary text."
    @click="${action('click')}"
  />
`

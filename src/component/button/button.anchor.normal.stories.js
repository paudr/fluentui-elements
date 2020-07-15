import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './button'

export default {
  title: 'Button/Anchor/Default',
  component: 'fluent-button'
}

export const Standard = () => html`
  <fluent-button
    text="Standard"
    href="javascript:alert('Hello World!')"
    @click="${action('click')}"
  />
`

export const Primary = () => html`
  <fluent-button
    primary
    text="Primary"
    href="javascript:alert('Hello World!')"
    @click="${action('click')}"
  />
`

export const Checked = () => html`
  <fluent-button
    checked
    text="Checked"
    href="javascript:alert('Hello World!')"
    @click="${action('click')}"
  />
`

export const PrimaryChecked = () => html`
  <fluent-button
    primary
    checked
    text="Primary Checked"
    href="javascript:alert('Hello World!')"
    @click="${action('click')}"
  />
`

export const Disabled = () => html`
  <fluent-button
    disabled
    text="Standard"
    href="javascript:alert('Hello World!')"
    @click="${action('click')}"
  />
`

export const DisabledPrimary = () => html`
  <fluent-button
    disabled
    primary
    text="Primary"
    href="javascript:alert('Hello World!')"
    @click="${action('click')}"
  />
`

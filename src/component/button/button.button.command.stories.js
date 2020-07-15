import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './button'

export default {
  title: 'Button/Button/Command',
  component: 'fluent-button'
}

export const Standard = () => html`
  <fluent-button
    type="command"
    text="New Item"
    icon="Add"
    @click="${action('click')}"
  />
`

export const Checked = () => html`
  <fluent-button
    type="command"
    checked
    text="New Item"
    icon="Add"
    @click="${action('click')}"
  />
`

export const Disabed = () => html`
  <fluent-button
    disabled
    type="command"
    text="New Item"
    icon="Add"
    @click="${action('click')}"
  />
`

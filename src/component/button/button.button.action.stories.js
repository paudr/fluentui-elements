import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './button'

export default {
  title: 'Button/Button/Action',
  component: 'fluent-button'
}

export const Standard = () => html`
  <fluent-button
    type="action"
    text="New Item"
    icon="Add"
    @click="${action('click')}"
  />
`

export const Checked = () => html`
  <fluent-button
    type="action"
    checked
    text="New Item"
    icon="Add"
    @click="${action('click')}"
  />
`

export const Disabled = () => html`
  <fluent-button
    disabled
    type="action"
    text="New Item"
    icon="Add"
    @click="${action('click')}"
  />
`

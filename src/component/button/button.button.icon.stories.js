import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './button'

export default {
  title: 'Button/Button/Icon',
  component: 'fluent-button'
}

export const Standard = () => html`
  <fluent-button type="icon" icon="Emoji2" @click="${action('click')}" />
`

export const Checked = () => html`
  <fluent-button
    checked
    type="icon"
    icon="Emoji2"
    @click="${action('click')}"
  />
`

export const Disabled = () => html`
  <fluent-button
    disabled
    type="icon"
    icon="Emoji2"
    @click="${action('click')}"
  />
`

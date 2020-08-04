import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './overlay'

const container = story => html`
  <style>
    .overlayContent {
      position: absolute;
      background: blue;
      left: 0px;
      right: 0px;
      bottom: 0px;
      padding: 10px;
      color: white;
    }

    .okCancel fluent-button {
      margin-left: 8px;
    }
  </style>
  <div>
    ${story()}
  </div>
`

export default {
  title: 'Overlay',
  component: 'fluent-overlay',
  decorators: [container]
}

export const Normal = () => html`
  <fluent-overlay @click="${action('click')}">
    <div class="overlayContent">
      <p>I am content within the overlay.</p>
    </div>
  </fluent-overlay>
`

export const Dark = () => html`
  <fluent-overlay @click="${action('click')}" dark>
    <div class="overlayContent">
      <p>I am content within the overlay.</p>
    </div>
  </fluent-overlay>
`

export const AutoClose = () => html`
  <fluent-overlay @click="${action('close')}" autoClose>
    <div class="overlayContent">
      <p>I am content within the overlay.</p>
    </div>
  </fluent-overlay>
`

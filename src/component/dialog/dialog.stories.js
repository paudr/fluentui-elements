import { html } from 'lit-html'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './dialog'
import '../button'

const container = story => html`
  <style>
    .okCancel {
      display: flex;
      justify-content: flex-end;
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
  title: 'Dialog',
  component: 'fluent-dialog',
  decorators: [container, withKnobs]
}

export const Normal = () => html`
  <fluent-dialog
    title="Missing Subject"
    text="Do you want to send this message without a subject?"
    maxWidth="400px"
  >
    <div slot="footer" class="okCancel">
      <fluent-button primary text="Ok"></fluent-button>
      <fluent-button text="Cancel"></fluent-button>
    </div>
  </fluent-dialog>
`

const choiceOptions = [
  { value: 'A', text: 'Option A' },
  { value: 'B', text: 'Option B' },
  { value: 'C', text: 'Option C', disabled: true }
]

export const LargeHeader = () => html`
  <fluent-dialog
    title="All emails together"
    text="Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails."
    type="largeHeader"
    maxWidth="400px"
    maxHeight="250px"
  >
    <fluent-choice-group
      label="Pick one"
      .options="${choiceOptions}"
    ></fluent-choice-group>
    <div slot="footer" class="okCancel">
      <fluent-button primary text="Ok"></fluent-button>
      <fluent-button text="Cancel"></fluent-button>
    </div>
  </fluent-dialog>
`

export const Close = () => html`
  <fluent-dialog
    title="Alert"
    text="You have a notification."
    type="close"
    maxWidth="400px"
    @close="${action('close')}"
  ></fluent-dialog>
`

export const AutoClose = () => html`
  <fluent-dialog
    title="Alert"
    text="You have a notification."
    type="close"
    autoClose
    maxWidth="400px"
    @close="${action('close')}"
  ></fluent-dialog>
`

export const Overlay = () => html`
  <fluent-dialog
    title="Alert"
    text="You have a notification."
    type="close"
    maxWidth="400px"
    overlay
    @close="${action('close')}"
  ></fluent-dialog>
`

export const OverlayDark = () => html`
  <fluent-dialog
    title="Alert"
    text="You have a notification."
    type="close"
    maxWidth="400px"
    overlay
    dark
    @close="${action('close')}"
  ></fluent-dialog>
`

export const OverlayAutoClose = () => html`
  <fluent-dialog
    title="Alert"
    text="You have a notification."
    type="close"
    maxWidth="400px"
    overlay
    dark
    autoClose
    @close="${action('close')}"
  ></fluent-dialog>
`

export const OverlayLightDismiss = () => html`
  <fluent-dialog
    title="Alert"
    text="You have a notification."
    type="close"
    maxWidth="400px"
    overlay
    dark
    isLightDismiss
    @close="${action('close')}"
  ></fluent-dialog>
`

export const OverlayLightDismissAutoClose = () => html`
  <fluent-dialog
    title="Alert"
    text="You have a notification."
    type="close"
    maxWidth="400px"
    overlay
    dark
    autoClose
    isLightDismiss
    @close="${action('close')}"
  ></fluent-dialog>
`

export const Sandbox = () => html`
  <fluent-dialog
    title="${text('title', 'All emails together')}"
    text="${text(
      'text',
      'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
    )}"
    type="${select('type', ['normal', 'largeHeader', 'close'], 'normal')}"
    minWidth="${text('minWidth', '')}"
    maxWidth="${text('maxWidth', '')}"
    minHeight="${text('minHeight', '')}"
    maxHeight="${text('maxHeight', '')}"
    ?overlay="${boolean('overlay', false)}"
    ?dark="${boolean('dark', false)}"
    ?autoClose="${boolean('autoClose', false)}"
    ?isLightDismiss="${boolean('isLightDismiss', false)}"
    @close="${action('close')}"
  >
    <fluent-choice-group
      label="Pick one"
      .options="${choiceOptions}"
    ></fluent-choice-group>
    <div slot="footer" class="okCancel">
      <fluent-button primary text="Ok"></fluent-button>
      <fluent-button text="Cancel"></fluent-button>
    </div>
  </fluent-dialog>
`

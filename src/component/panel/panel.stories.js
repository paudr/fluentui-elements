import { html } from 'lit-html'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './panel'
import '../button'

const container = story => html`
  <style>
    .okCancel fluent-button {
      margin-right: 8px;
    }
  </style>
  <div>
    ${story()}
  </div>
`

export default {
  title: 'Panel',
  component: 'fluent-panel',
  decorators: [container, withKnobs]
}

const types = [
  'custom',
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
  'fluid'
]

export const CustomWidth = () => html`
  <fluent-panel
    type="custom"
    width="500px"
    headerText="Missing Subject"
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const ExtraSmall = () => html`
  <fluent-panel
    type="extraSmall"
    headerText="Missing Subject"
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const Small = () => html`
  <fluent-panel
    type="small"
    headerText="Missing Subject"
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const Medium = () => html`
  <fluent-panel
    type="medium"
    headerText="Missing Subject"
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const Large = () => html`
  <fluent-panel
    type="large"
    headerText="Missing Subject"
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const ExtraLarge = () => html`
  <fluent-panel
    type="extraLarge"
    headerText="Missing Subject"
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const Fluid = () => html`
  <fluent-panel
    type="fluid"
    headerText="Missing Subject"
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const Left = () => html`
  <fluent-panel
    type="small"
    headerText="Missing Subject"
    left
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const Footer = () => html`
  <fluent-panel
    type="small"
    headerText="Panel with footer at bottom"
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
    <div slot="footer" class="okCancel">
      <fluent-button type="primary">Ok</fluent-button>
      <fluent-button>Cancel</fluent-button>
    </div>
  </fluent-panel>
`

export const WithoutCloseButton = () => html`
  <fluent-panel
    type="small"
    headerText="Missing Subject"
    withoutCloseButton
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const AutoClose = () => html`
  <fluent-panel
    type="small"
    headerText="Missing Subject"
    autoClose
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const Overlay = () => html`
  <fluent-panel
    type="small"
    headerText="Missing Subject"
    overlay
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const OverlayDark = () => html`
  <fluent-panel
    type="small"
    headerText="Missing Subject"
    overlay
    dark
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const OverlayAutoClose = () => html`
  <fluent-panel
    type="small"
    headerText="Missing Subject"
    overlay
    dark
    autoClose
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const OverlayLightDismiss = () => html`
  <fluent-panel
    type="small"
    headerText="Missing Subject"
    overlay
    dark
    isLightDismiss
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const OverlayLightDismissAutoClose = () => html`
  <fluent-panel
    type="small"
    headerText="Missing Subject"
    overlay
    dark
    autoClose
    isLightDismiss
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
  </fluent-panel>
`

export const Sandbox = () => html`
  <fluent-panel
    type="${select('type', types, 'small')}"
    width="${text('width', '')}"
    minWidth="${text('minWidth', '')}"
    maxWidth="${text('maxWidth', '')}"
    headerText="${text('headerText', 'Missing Subject')}"
    ?withoutCloseButton="${boolean('withoutCloseButton', false)}"
    ?left="${boolean('left', false)}"
    ?overlay="${boolean('overlay', false)}"
    ?dark="${boolean('dark', false)}"
    ?autoClose="${boolean('autoClose', false)}"
    ?isLightDismiss="${boolean('isLightDismiss', false)}"
    @close="${action('close')}"
  >
    <p>Content goes here.</p>
    <div slot="footer" class="okCancel">
      <fluent-button type="primary">Ok</fluent-button>
      <fluent-button>Cancel</fluent-button>
    </div>
  </fluent-panel>
`

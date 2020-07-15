import { html } from 'lit-html'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import './spinner'

export default {
  title: 'Spinner',
  component: 'fluent-spinner',
  decorators: [withKnobs]
}

export const ExtraSmallSpinner = () => html`
  <fluent-spinner type="xSmall"></fluent-spinner>
`

export const SmallSpinner = () => html`
  <fluent-spinner type="small"></fluent-spinner>
`

export const MediumSpinner = () => html`
  <fluent-spinner type="medium"></fluent-spinner>
`

export const LargeSpinner = () => html`
  <fluent-spinner type="large"></fluent-spinner>
`

export const SpinnerWithLabel = () => html`
  <fluent-spinner label="I am definitely loading..."></fluent-spinner>
`

export const LargeSpinnerWithLabel = () => html`
  <fluent-spinner
    type="large"
    label="Seriously, still loading..."
  ></fluent-spinner>
`

const styles = new CSSStyleSheet()
styles.replaceSync(`
  #circle {
    border-width: 10px;
    width: 100px;
    height: 100px;
  }
`)

export const Styled = () => html`
  <fluent-spinner .styleSheet="${styles}"></fluent-spinner>
`

const typeOptions = {
  Large: 'large',
  Normal: '',
  Medium: 'medium',
  Small: 'small',
  XSmall: 'xSmall'
}

export const Sandbox = () => html`
  <fluent-spinner
    type="${select('type', typeOptions, '')}"
    label="${text('label', '')}"
  ></fluent-spinner>
`

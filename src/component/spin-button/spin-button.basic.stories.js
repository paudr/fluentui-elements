import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './spin-button'

const container = story => html`
  <div
    tabindex="0"
    style="outline: 0"
    @keydown="${event => event.stopPropagation()}"
  >
    ${story()}
  </div>
`

export default {
  title: 'SpinButton/Basic',
  component: 'fluent-spin-button',
  decorators: [container]
}

export const Normal = () => html`
  <fluent-spin-button
    label="Standard"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const WithDescription = () => html`
  <fluent-spin-button
    label="Standard"
    description="A fancy description."
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const Invalid = () => html`
  <fluent-spin-button
    invalid
    label="Invalid"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const WithErrorMessage = () => html`
  <fluent-spin-button
    label="Invalid"
    errorMessage="Error message"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const Disabled = () => html`
  <fluent-spin-button
    label="Disabled"
    value="42"
    disabled
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const Required = () => html`
  <style>
    fluent-spin-button {
      width: 250px;
    }
  </style>
  <p>
    <fluent-spin-button
      label="Required"
      required
      @change="${action('change')}"
    ></fluent-spin-button>
  </p>
  <p>
    <fluent-spin-button
      required
      @change="${action('change')}"
    ></fluent-spin-button>
  </p>
`

export const Borderless = () => html`
  <fluent-spin-button
    borderless
    label="Borderless"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const CustomStep = () => html`
  <fluent-spin-button
    label="Spin Button With Custom Step"
    labelPosition="start"
    step="10"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const CustomFormat = () => html`
  <fluent-spin-button
    label="Formated number"
    labelPosition="start"
    step="1000.2"
    .stringify="${value =>
      typeof value === 'number' ? value.toLocaleString('es-ES') : ''}"
    .parse="${text => {
      const value = Number(text.replace(/\./g, '').replace(',', '.'))
      return isNaN(value) ? null : value
    }}"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const CustomUnit = () => html`
  <fluent-spin-button
    label="of distance"
    labelPosition="end"
    .stringify="${value => (typeof value === 'number' ? `${value} cm` : '')}"
    .parse="${text => {
      const value = Number(text.replace(/\s*cm\s*$/i, ''))
      return isNaN(value) ? null : value
    }}"
    @change="${action('change')}"
  ></fluent-spin-button>
`

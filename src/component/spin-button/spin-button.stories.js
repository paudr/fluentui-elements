import { html } from 'lit-html'
import {
  withKnobs,
  text,
  number,
  boolean,
  select
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './spin-button'
import iconCode from '../icon/code'

const container = story => html`
  <div
    tabindex="0"
    @keydown="${event => event.stopPropagation()}"
    style="outline: 0"
  >
    ${story()}
  </div>
`

export default {
  title: 'SpinButton',
  component: 'fluent-spin-button',
  decorators: [container, withKnobs]
}

const nameOptions = Object.keys(iconCode).reduce(
  (object, name) => Object.assign(object, { [name]: name }),
  { None: '' }
)

export const Normal = () => html`
  <fluent-spin-button
    label="Spin Button"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const WithIcon = () => html`
  <fluent-spin-button
    label="Spin Button"
    icon="IncreaseIndentLegacy"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const LabelAtStart = () => html`
  <fluent-spin-button
    label="Spin Button With Label At Start"
    labelPosition="start"
    icon="Light"
    @change="${action('change')}"
  ></fluent-spin-button>
`

export const LabelAtEnd = () => html`
  <fluent-spin-button
    label="Spin Button With Label At End"
    labelPosition="end"
    icon="Light"
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
export const Sandbox = () => html`
  <fluent-spin-button
    .label="${text('label', 'Label')}"
    .icon="${select('name', nameOptions, 'World')}"
    .required="${boolean('required', false)}"
    .disabled="${boolean('disabled', false)}"
    .labelPosition="${select(
      'labelPosition',
      { Top: '', Start: 'start', End: 'end' },
      ''
    )}"
    .step="${number('step', 1)}"
    @change="${action('change')}"
  ></fluent-spin-button>
`

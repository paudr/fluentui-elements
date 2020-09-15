import { html } from 'lit-html'
import { withKnobs, select } from '@storybook/addon-knobs'
import './icon'
import iconCode from './code'

const container = story => html`
  <style>
    fluent-icon {
      font-size: 50px;
      height: 50px;
      width: 50px;
      margin: 0 25px;
    }
  </style>
  <div>${story()}</div>
`

export default {
  title: 'Icon',
  component: 'fluent-icon',
  decorators: [container, withKnobs]
}

export const Normal = () => html`
  <fluent-icon name="CompassNW"></fluent-icon>
  <fluent-icon name="Dictionary"></fluent-icon>
  <fluent-icon name="TrainSolid"></fluent-icon>
`

export const Colored = () => html`
  <fluent-icon style="color: deepskyblue;" name="CompassNW"></fluent-icon>
  <fluent-icon style="color: greenyellow;" name="Dictionary"></fluent-icon>
  <fluent-icon style="color: salmon;" name="TrainSolid"></fluent-icon>
`

const nameOptions = Object.keys(iconCode).reduce(
  (object, name) => Object.assign(object, { [name]: name }),
  { None: '' }
)

export const Sandbox = () =>
  html`<fluent-icon name="${select('name', nameOptions, '')}"></fluent-icon>`

import { html } from 'lit-html'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './dropdown'

export default {
  title: 'Dropdown',
  component: 'fluent-dropdown',
  decorators: [withKnobs]
}

const fruitOptions = [
  { text: 'Fruits', type: 'header' },
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Mango', value: 'mango' },
  { text: 'Orange', value: 'orange', disabled: true },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Grape', value: 'grape' },
  { type: 'divider' },
  { text: 'Vegetables', type: 'header' },
  { text: 'Broccoli', value: 'broccoli' },
  { text: 'Carrot', value: 'carrot' },
  { text: 'Lettuce', value: 'lettuce' }
]

function alertValue (event) {
  const checkbox = event.target.ownerDocument.getElementById('sandbox')
  alert(checkbox.value)
}

export const Sandbox = () => html`
  <fluent-dropdown
    id="sandbox"
    .label="${text('label', 'Standard')}"
    .description="${text('description', '')}"
    .invalid="${boolean('invalid', false)}"
    .errorMessage="${text('errorMessage', '')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .borderless="${boolean('borderless', false)}"
    .underlined="${boolean('underlined', false)}"
    .open="${boolean('open', false)}"
    .value="${object('value')}"
    .multiple="${boolean('multiple', false)}"
    .readonly="${boolean('readonly', false)}"
    .options="${object('options', fruitOptions)}"
    @change="${action('change')}"
  ></fluent-dropdown>
  <p>
    <fluent-button
      text="Alert value"
      @click="${alertValue}"
    ><fluent-button>
  </p>
`

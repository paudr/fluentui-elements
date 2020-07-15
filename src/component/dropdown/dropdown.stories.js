//
import { html } from 'lit-html'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './dropdown'

export default {
  title: 'Dropdown',
  component: 'fluent-dropdown',
  decorators: [withKnobs]
}

const optionOptions = [
  { text: 'Option a', value: 'a' },
  { text: 'Option b', value: 'b' },
  { text: 'Option c', value: 'c' },
  { text: 'Option d', value: 'd', disabled: true },
  { text: 'Option e', value: 'e' }
]

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

export const Normal = () => html`
  <fluent-dropdown
    label="Basic Dropdown"
    .value="${'grape'}"
    .options="${optionOptions}"
    @change="${action('change')}"
  ></fluent-dropdown>
  <p>
    <span>Keys:</span><br />
    <span> - ArrowDown: Highlight next option</span><br />
    <span> - ArrowUp: Highlight previous option</span><br />
    <span> - Space: Select highlighted option</span><br />
    <span> - Enter: Select highlighted option</span><br />
    <span>
      - [Letter]: Highlight first option with text starting with letter</span
    ><br />
  </p>
`

export const WithGroups = () => html`
  <fluent-dropdown
    label="Basic Dropdown"
    .value="${'grape'}"
    .options="${fruitOptions}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const Placeholder = () => html`
  <fluent-dropdown
    label="Basic Dropdown"
    placeholder="Select an option"
    .options="${fruitOptions}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const MultiSelect = () => html`
  <fluent-dropdown
    multiple
    label="Multi Select Dropdown"
    .options="${fruitOptions}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const MultiSelectWithPlaceholder = () => html`
  <fluent-dropdown
    multiple
    label="Multi Select Dropdown"
    placeholder="Select an option"
    .options="${optionOptions}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const WithErrorMessage = () => html`
  <fluent-dropdown
    label="With error message"
    .options="${fruitOptions}"
    errorMessage="Error message"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const Disabled = () => html`
  <fluent-dropdown
    disabled
    label="Disabled Dropdown"
    .options="${fruitOptions}"
    .value="${'orange'}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const Required = () => html`
  <fluent-dropdown
    required
    label="Required Dropdown"
    .options="${fruitOptions}"
    .value="${'orange'}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const ReadOnly = () => html`
  <fluent-dropdown
    readonly
    label="Read Only Dropdown"
    .options="${fruitOptions}"
    .value="${'grape'}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

function alertValue (event) {
  const checkbox = event.target.ownerDocument.getElementById('sandbox')
  alert(checkbox.value)
}

export const Sandbox = () => html`
  <fluent-dropdown
    id="sandbox"
    .label="${text('label', 'Dropdown')}"
    .value="${object('value')}"
    .multiple="${boolean('multiple', false)}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .readonly="${boolean('readonly', false)}"
    .options="${object('options', fruitOptions)}"
    .errorMessage="${text('errorMessage', '')}"
    .open="${boolean('open', false)}"
    @change="${action('change')}"
  ></fluent-dropdown>
  <p>
    <fluent-button
      text="Alert value"
      @click="${alertValue}"
    ><fluent-button>
  </p>
`

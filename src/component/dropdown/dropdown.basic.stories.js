import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './dropdown'

export default {
  title: 'Dropdown/Basic',
  component: 'fluent-dropdown'
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

export const WithDescription = () => html`
  <fluent-dropdown
    label="Standard"
    description="A fancy description."
    .options="${optionOptions}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const Invalid = () => html`
  <fluent-dropdown
    invalid
    label="Invalid"
    .options="${optionOptions}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const WithErrorMessage = () => html`
  <fluent-dropdown
    label="With error message"
    errorMessage="Error message"
    .options="${optionOptions}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const Disabled = () => html`
  <fluent-dropdown
    disabled
    label="Disabled"
    .options="${fruitOptions}"
    .value="${'orange'}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

export const Required = () => html`
  <style>
    fluent-dropdown {
      width: 250px;
    }
  </style>
  <p>
    <fluent-dropdown
      required
      label="Required"
      .options="${fruitOptions}"
      @change="${action('change')}"
    ></fluent-dropdown>
  </p>
  <p>
    <fluent-dropdown
      required
      multiple
      .options="${fruitOptions}"
      @change="${action('change')}"
    ></fluent-dropdown>
  </p>
`

export const Borderless = () => html`
  <fluent-dropdown
    borderless
    label="Borderless"
    .options="${fruitOptions}"
    @change="${action('change')}"
  ></fluent-dropdown>
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

export const ReadOnly = () => html`
  <fluent-dropdown
    readonly
    label="Read Only Dropdown"
    .options="${fruitOptions}"
    .value="${'grape'}"
    @change="${action('change')}"
  ></fluent-dropdown>
`

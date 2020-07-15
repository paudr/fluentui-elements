import { html } from 'lit-html'
import { withKnobs, object, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './select'

export default {
  title: 'Select',
  component: 'fluent-select',
  decorators: [withKnobs]
}

function toggleMultiple (id) {
  const select = document.getElementById(id)
  select.multiple = !select.multiple
}

function highlightNextOption (id, direction) {
  const select = document.getElementById(id)
  switch (direction) {
    case -1:
      select.highlightNextOption(true)
      break
    case 0:
      select.highlightedIndex = -1
      break
    case 1:
      select.highlightNextOption()
      break
  }
}

function scrollToElement (id) {
  const select = document.getElementById(id)
  select.scrollToElement(select.highlightedIndex)
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
  <fluent-select
    .options="${optionOptions}"
    @change="${action('change')}"
  ></fluent-select>
`

export const WithGroups = () => html`
  <fluent-select
    .options="${fruitOptions}"
    @change="${action('change')}"
  ></fluent-select>
`

export const WithMaxHeight = () => html`
  <fluent-select
    .options="${fruitOptions}"
    maxHeight="200px"
    @change="${action('change')}"
  ></fluent-select>
`

export const Multiple = () => html`
  <fluent-select
    multiple
    .options="${optionOptions}"
    @change="${action('change')}"
  ></fluent-select>
`

export const MultipleWithGroups = () => html`
  <fluent-select
    multiple
    .options="${fruitOptions}"
    @change="${action('change')}"
  ></fluent-select>
`

export const MultipleWithMaxHeight = () => html`
  <fluent-select
    multiple
    .options="${fruitOptions}"
    maxHeight="200px"
    @change="${action('change')}"
  ></fluent-select>
`

export const HighlightNextOption = () => html`
  <p>
    <fluent-button
      text="Toggle multiple"
      @click="${() => toggleMultiple('highlightNextOption')}"
    ></fluent-button>
  </p>
  <p>
    <fluent-button
      text="Highlight previous"
      @click="${() => highlightNextOption('highlightNextOption', -1)}"
    ></fluent-button>
    <fluent-button
      text="Highlight none"
      @click="${() => highlightNextOption('highlightNextOption', 0)}"
    ></fluent-button>
    <fluent-button
      text="Highlight next"
      @click="${() => highlightNextOption('highlightNextOption', 1)}"
    ></fluent-button>
  </p>
  <fluent-select
    id="highlightNextOption"
    multiple
    .options="${fruitOptions}"
    @change="${action('change')}"
  ></fluent-select>
`

export const ScrollToElement = () => html`
  <p>
    <fluent-button
      text="Toggle multiple"
      @click="${() => toggleMultiple('scrollToElement')}"
    ></fluent-button>
  </p>
  <p>
    <fluent-button
      text="Highlight previous"
      @click="${() => highlightNextOption('scrollToElement', -1)}"
    ></fluent-button>
    <fluent-button
      text="Highlight none"
      @click="${() => highlightNextOption('scrollToElement', 0)}"
    ></fluent-button>
    <fluent-button
      text="Highlight next"
      @click="${() => highlightNextOption('scrollToElement', 1)}"
    ></fluent-button>
  </p>
  <p>
    <fluent-button
      text="Scroll to highlighted"
      @click="${() => scrollToElement('scrollToElement')}"
    ></fluent-button>
  </p>
  <fluent-select
    id="scrollToElement"
    multiple
    .options="${fruitOptions}"
    maxHeight="200px"
    @change="${action('change')}"
  ></fluent-select>
`

function alertValue (event) {
  const checkbox = event.target.ownerDocument.getElementById('sandbox')
  alert(checkbox.value)
}

export const Sandbox = () => html`
  <fluent-select
    id="sandbox"
    multiple
    .options="${object('options', fruitOptions)}"
    .value="${object('value', [])}"
    .highlightedIndex="${number('highlightedIndex', -1)}"
    .multiple="${boolean('multiple', false)}"
    @change="${action('change')}"
  ></fluent-select>
  <p>
    <fluent-button
      text="Alert value"
      @click="${alertValue}"
    ><fluent-button>
  </p>
`

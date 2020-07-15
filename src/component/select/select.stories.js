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

function markNextOption (id, direction) {
  const select = document.getElementById(id)
  switch (direction) {
    case -1:
      select.markNextOption(true)
      break
    case 0:
      select.markedIndex = -1
      break
    case 1:
      select.markNextOption()
      break
  }
}

function scrollToElement (id) {
  const select = document.getElementById(id)
  select.scrollToElement(select.markedIndex)
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

export const MarkNextOption = () => html`
  <p>
    <fluent-button
      text="Toggle multiple"
      @click="${() => toggleMultiple('markNextOption')}"
    ></fluent-button>
  </p>
  <p>
    <fluent-button
      text="Mark previous"
      @click="${() => markNextOption('markNextOption', -1)}"
    ></fluent-button>
    <fluent-button
      text="Mark none"
      @click="${() => markNextOption('markNextOption', 0)}"
    ></fluent-button>
    <fluent-button
      text="Mark next"
      @click="${() => markNextOption('markNextOption', 1)}"
    ></fluent-button>
  </p>
  <fluent-select
    id="markNextOption"
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
      text="Mark previous"
      @click="${() => markNextOption('scrollToElement', -1)}"
    ></fluent-button>
    <fluent-button
      text="Mark none"
      @click="${() => markNextOption('scrollToElement', 0)}"
    ></fluent-button>
    <fluent-button
      text="Mark next"
      @click="${() => markNextOption('scrollToElement', 1)}"
    ></fluent-button>
  </p>
  <p>
    <fluent-button
      text="Scroll to marked"
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
    .markedIndex="${number('markedIndex', -1)}"
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

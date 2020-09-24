import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderDropdown (args) {
  const dropdown = document.createElement('FLUENT-DROPDOWN')
  dropdown.addEventListener('keydown', event => event.stopPropagation())

  dropdown.addEventListener('focus', action('focus'))
  dropdown.addEventListener('blur', action('blur'))
  dropdown.addEventListener('input', action('input'))
  dropdown.addEventListener('change', action('change'))

  for (const prop in args) {
    dropdown[prop] = args[prop]
  }

  const container = document.createElement('DIV')
  const paragraph = document.createElement('P')
  const textContent = [
    'Keys:',
    ' - ArrowDown: Highlight next option',
    ' - ArrowUp: Highlight previous option',
    ' - Enter: Select highlighted option',
    ' - Esc: Close dropdown',
    ' - [Letter]: Highlight first option with text starting with letter'
  ]

  textContent.forEach(phrase => {
    const span = document.createElement('SPAN')
    span.textContent = phrase
    paragraph.appendChild(span)
    paragraph.appendChild(document.createElement('BR'))
  })

  container.appendChild(dropdown)
  container.appendChild(paragraph)

  return container
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

export default {
  title: 'Basic Inputs/Dropdown/Underlined',
  component: 'fluent-dropdown',
  argTypes
}

export const Normal = renderDropdown.bind({})
Normal.args = {
  underlined: true,
  options: optionOptions,
  label: 'Basic Dropdown'
}

export const WithDescription = renderDropdown.bind({})
WithDescription.args = {
  underlined: true,
  options: optionOptions,
  label: 'Basic Dropdown',
  description: 'A fancy description.'
}

export const Invalid = renderDropdown.bind({})
Invalid.args = {
  underlined: true,
  options: optionOptions,
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderDropdown.bind({})
WithErrorMessage.args = {
  underlined: true,
  options: optionOptions,
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderDropdown.bind({})
Disabled.args = {
  underlined: true,
  options: fruitOptions,
  label: 'Disabled',
  disabled: true,
  value: 'orange'
}

export const Required = renderDropdown.bind({})
Required.args = {
  underlined: true,
  options: optionOptions,
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderDropdown.bind({})
RequiredWithoutLabel.args = {
  underlined: true,
  options: optionOptions,
  required: true
}

export const WithGroups = renderDropdown.bind({})
WithGroups.args = {
  underlined: true,
  options: fruitOptions,
  label: 'Basic Dropdown',
  value: 'grape'
}

export const Placeholder = renderDropdown.bind({})
Placeholder.args = {
  underlined: true,
  options: fruitOptions,
  label: 'Basic Dropdown',
  placeholder: 'Select an option'
}

export const MultiSelect = renderDropdown.bind({})
MultiSelect.args = {
  underlined: true,
  options: fruitOptions,
  label: 'Multi Select Dropdown',
  multiple: true
}

export const MultiSelectWithPlaceholder = renderDropdown.bind({})
MultiSelectWithPlaceholder.args = {
  underlined: true,
  options: fruitOptions,
  label: 'Multi Select Dropdown',
  multiple: true,
  placeholder: 'Select an option'
}

export const ReadOnly = renderDropdown.bind({})
ReadOnly.args = {
  underlined: true,
  options: fruitOptions,
  label: 'Read Only Dropdown',
  readonly: true,
  value: 'grape'
}

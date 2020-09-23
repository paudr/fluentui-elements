import './test-combo-element'
import argTypes from './arg-types'

function renderComboElement (args) {
  const comboElement = document.createElement('TEST-COMBO-ELEMENT')

  for (const prop in args) {
    comboElement[prop] = args[prop]
  }

  const container = document.createElement('DIV')
  container.style.width = '80%'
  const paragraph = document.createElement('P')
  paragraph.textContent =
    'Press "Enter" key with element focused to toggle dropdown'

  container.appendChild(comboElement)
  container.appendChild(paragraph)

  return container
}

export default {
  title: 'Base Types/ComboElement/Underlined',
  component: 'test-combo-element',
  argTypes
}

export const Normal = renderComboElement.bind({})
Normal.args = {
  underlined: true,
  label: 'Standard'
}

export const WithDescription = renderComboElement.bind({})
WithDescription.args = {
  underlined: true,
  label: 'Standard',
  description: 'A fancy description.'
}

export const Invalid = renderComboElement.bind({})
Invalid.args = {
  underlined: true,
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderComboElement.bind({})
WithErrorMessage.args = {
  underlined: true,
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderComboElement.bind({})
Disabled.args = {
  underlined: true,
  label: 'Disabled',
  value: 'I am disabled',
  disabled: true
}

export const Required = renderComboElement.bind({})
Required.args = {
  underlined: true,
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderComboElement.bind({})
RequiredWithoutLabel.args = {
  underlined: true,
  required: true
}

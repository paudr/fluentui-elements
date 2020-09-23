import './test-input-element'
import argTypes from './arg-types'

function renderInputElement (args) {
  const inputElement = document.createElement('TEST-INPUT-ELEMENT')

  for (const prop in args) {
    inputElement[prop] = args[prop]
  }

  return inputElement
}

export default {
  title: 'Base Types/InputElement/Underlined',
  component: 'test-input-element',
  argTypes
}

export const Normal = renderInputElement.bind({})
Normal.args = {
  underlined: true,
  label: 'Standard'
}

export const WithDescription = renderInputElement.bind({})
WithDescription.args = {
  underlined: true,
  label: 'Standard',
  description: 'A fancy description.'
}

export const Invalid = renderInputElement.bind({})
Invalid.args = {
  underlined: true,
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderInputElement.bind({})
WithErrorMessage.args = {
  underlined: true,
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderInputElement.bind({})
Disabled.args = {
  underlined: true,
  label: 'Disabled',
  value: 'I am disabled',
  disabled: true
}

export const Required = renderInputElement.bind({})
Required.args = {
  underlined: true,
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderInputElement.bind({})
RequiredWithoutLabel.args = {
  underlined: true,
  required: true
}

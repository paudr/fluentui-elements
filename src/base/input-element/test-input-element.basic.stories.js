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
  title: 'Base Types/InputElement/Basic',
  component: 'test-input-element',
  argTypes
}

export const Normal = renderInputElement.bind({})
Normal.args = {
  label: 'Standard'
}

export const WithDescription = renderInputElement.bind({})
WithDescription.args = {
  label: 'Standard',
  description: 'A fancy description.'
}

export const Invalid = renderInputElement.bind({})
Invalid.args = {
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderInputElement.bind({})
WithErrorMessage.args = {
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderInputElement.bind({})
Disabled.args = {
  label: 'Disabled',
  value: 'I am disabled',
  disabled: true
}

export const Required = renderInputElement.bind({})
Required.args = {
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderInputElement.bind({})
RequiredWithoutLabel.args = {
  required: true
}

export const Borderless = renderInputElement.bind({})
Borderless.args = {
  label: 'Borderless single-line TextField',
  borderless: true
}

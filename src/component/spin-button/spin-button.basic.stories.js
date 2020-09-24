import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderSpinButton (args) {
  const spinButton = document.createElement('FLUENT-SPIN-BUTTON')
  spinButton.addEventListener('keydown', event => event.stopPropagation())

  spinButton.addEventListener('change', action('change'))

  for (const prop in args) {
    spinButton[prop] = args[prop]
  }

  return spinButton
}

export default {
  title: 'Basic Inputs/SpinButton/Basic',
  component: 'fluent-spin-button',
  argTypes
}

export const Normal = renderSpinButton.bind({})
Normal.args = {
  label: 'Standard'
}

export const WithDescription = renderSpinButton.bind({})
WithDescription.args = {
  label: 'Standard',
  description: 'A fancy description.'
}

export const Invalid = renderSpinButton.bind({})
Invalid.args = {
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderSpinButton.bind({})
WithErrorMessage.args = {
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderSpinButton.bind({})
Disabled.args = {
  label: 'Disabled',
  value: '42',
  disabled: true
}

export const Required = renderSpinButton.bind({})
Required.args = {
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderSpinButton.bind({})
RequiredWithoutLabel.args = {
  required: true
}

export const Borderless = renderSpinButton.bind({})
Borderless.args = {
  label: 'Borderless',
  borderless: true
}

export const CustomStep = renderSpinButton.bind({})
CustomStep.args = {
  label: 'Spin Button With Custom Step',
  step: 10
}

export const CustomFormat = renderSpinButton.bind({})
CustomFormat.args = {
  label: 'Spin Button With Custom Step',
  step: 1000.2,
  stringify: value =>
    typeof value === 'number' ? value.toLocaleString('es-ES') : '',
  parse: text => {
    const value = Number(text.replace(/\./g, '').replace(',', '.'))
    return isNaN(value) ? null : value
  }
}

export const CustomUnit = renderSpinButton.bind({})
CustomUnit.args = {
  label: 'Distance',
  stringify: value => (typeof value === 'number' ? `${value} cm` : ''),
  parse: text => {
    const value = Number(text.replace(/\s*cm\s*$/i, ''))
    return isNaN(value) ? null : value
  }
}

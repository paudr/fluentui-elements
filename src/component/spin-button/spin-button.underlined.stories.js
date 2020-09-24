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
  title: 'Basic Inputs/SpinButton/Underlined',
  component: 'fluent-spin-button',
  argTypes
}

export const Normal = renderSpinButton.bind({})
Normal.args = {
  underlined: true,
  label: 'Standard'
}

export const WithDescription = renderSpinButton.bind({})
WithDescription.args = {
  underlined: true,
  label: 'Standard',
  description: 'A fancy description.'
}

export const Invalid = renderSpinButton.bind({})
Invalid.args = {
  underlined: true,
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderSpinButton.bind({})
WithErrorMessage.args = {
  underlined: true,
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderSpinButton.bind({})
Disabled.args = {
  underlined: true,
  label: 'Disabled',
  value: '42',
  disabled: true
}

export const Required = renderSpinButton.bind({})
Required.args = {
  underlined: true,
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderSpinButton.bind({})
RequiredWithoutLabel.args = {
  underlined: true,
  required: true
}

export const Borderless = renderSpinButton.bind({})
Borderless.args = {
  underlined: true,
  label: 'Borderless',
  borderless: true
}

export const CustomStep = renderSpinButton.bind({})
CustomStep.args = {
  underlined: true,
  label: 'Spin Button With Custom Step',
  step: 10
}

export const CustomFormat = renderSpinButton.bind({})
CustomFormat.args = {
  underlined: true,
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
  underlined: true,
  label: 'Distance',
  stringify: value => (typeof value === 'number' ? `${value} cm` : ''),
  parse: text => {
    const value = Number(text.replace(/\s*cm\s*$/i, ''))
    return isNaN(value) ? null : value
  }
}

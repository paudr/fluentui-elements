import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './checkbox'

export default {
  title: 'Basic Inputs/Checkbox',
  component: 'fluent-checkbox',
  argTypes
}

export function Standard (args) {
  const checkbox = document.createElement('FLUENT-CHECKBOX')

  for (const prop in args) {
    checkbox[prop] = args[prop]
  }

  checkbox.addEventListener('change', action('change'))

  return checkbox
}
Standard.args = {
  label: 'Standard'
}

export function ReadValue (args) {
  const checkbox = document.createElement('FLUENT-CHECKBOX')

  checkbox.addEventListener('change', action('change'))

  for (const prop in args) {
    checkbox[prop] = args[prop]
  }

  const container = document.createElement('DIV')
  const button = document.createElement('FLUENT-BUTTON')
  button.text = 'Show checkbox value'
  button.addEventListener('click', () => {
    console.log(checkbox.value)
    alert(checkbox.value)
  })

  container.appendChild(checkbox)
  container.appendChild(document.createElement('BR'))
  container.appendChild(button)

  return container
}
ReadValue.args = {
  label: 'Standard',
  valueTrue: 'Yes',
  valueFalse: 'No'
}

import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './number-field'

export default {
  title: 'Basic Inputs/NumberField',
  component: 'fluent-number-field',
  argTypes
}

export function Standard (args) {
  const numberField = document.createElement('FLUENT-NUMBER-FIELD')
  numberField.addEventListener('keydown', event => event.stopPropagation())

  numberField.addEventListener('focus', action('focus'))
  numberField.addEventListener('blur', action('blur'))
  numberField.addEventListener('input', action('input'))
  numberField.addEventListener('change', action('change'))
  numberField.addEventListener('click', action('click'))
  numberField.addEventListener('click:icon', action('click:icon'))

  for (const prop in args) {
    numberField[prop] = args[prop]
  }

  return numberField
}
Standard.args = {
  label: 'Standard'
}

export function CustomTransform (args) {
  const numberField = Standard(args)
  numberField.style.marginBottom = '25px'
  numberField.stringify = value => (value == null ? '' : value.toString(16))
  numberField.parse = value => {
    const parsed = parseInt(value, 16)
    return value.toLowerCase() === numberField.stringify(parsed) ? parsed : NaN
  }

  const container = document.createElement('FLUENT-DIV')

  const button = document.createElement('FLUENT-BUTTON')
  button.text = 'Alert value'
  button.addEventListener('click', () => alert(numberField.value))

  container.appendChild(numberField)
  container.appendChild(button)

  return container
}
CustomTransform.args = {
  label: 'Hexadecimal field'
}

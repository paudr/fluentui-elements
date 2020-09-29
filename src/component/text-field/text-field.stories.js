import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './text-field'

export default {
  title: 'Basic Inputs/TextField',
  component: 'fluent-text-field',
  argTypes
}

export function Standard (args) {
  const textField = document.createElement('FLUENT-TEXT-FIELD')
  textField.addEventListener('keydown', event => event.stopPropagation())

  textField.addEventListener('focus', action('focus'))
  textField.addEventListener('blur', action('blur'))
  textField.addEventListener('input', action('input'))
  textField.addEventListener('change', action('change'))
  textField.addEventListener('click', action('click'))
  textField.addEventListener('click:icon', action('click:icon'))

  for (const prop in args) {
    textField[prop] = args[prop]
  }

  return textField
}
Standard.args = {
  label: 'Standard'
}

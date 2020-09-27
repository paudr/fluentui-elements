import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './number-field'

function renderNumberField (args) {
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

export default {
  title: 'Basic Inputs/NumberField',
  component: 'fluent-number-field',
  argTypes
}

export const Normal = renderNumberField.bind({})
Normal.args = {
  label: 'NumberField'
}

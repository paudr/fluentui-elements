import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './button'

export default {
  title: 'Basic Inputs/Button',
  component: 'fluent-button',
  argTypes
}

export function Standard (args) {
  const button = document.createElement('FLUENT-BUTTON')

  for (const prop in args) {
    button[prop] = args[prop]
  }

  button.addEventListener('click', action('click'))

  return button
}
Standard.args = {
  text: 'Standard'
}

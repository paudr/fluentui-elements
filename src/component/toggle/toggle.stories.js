import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './toggle'

export default {
  title: 'Basic Inputs/Toggle',
  component: 'fluent-toggle',
  argTypes
}

export function Standard (args) {
  const toggle = document.createElement('FLUENT-TOGGLE')
  toggle.addEventListener('keydown', event => event.stopPropagation())

  toggle.addEventListener('change', action('change'))

  for (const prop in args) {
    toggle[prop] = args[prop]
  }

  return toggle
}
Standard.args = {
  checked: true,
  label: 'Standard',
  onText: 'On',
  offText: 'Off'
}

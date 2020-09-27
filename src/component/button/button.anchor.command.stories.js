import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './button'

function renderButton (args) {
  const button = document.createElement('FLUENT-BUTTON')

  button.addEventListener('click', action('click'))

  for (const prop in args) {
    button[prop] = args[prop]
  }

  return button
}

export default {
  title: 'Basic Inputs/Button/Anchor/Command',
  component: 'fluent-button',
  argTypes
}

export const Standard = renderButton.bind({})
Standard.args = {
  type: 'command',
  text: 'New Item',
  icon: 'Add',
  href: "javascript:alert('Hello World!')"
}

export const Checked = renderButton.bind({})
Checked.args = {
  type: 'command',
  checked: true,
  text: 'New Item',
  icon: 'Add',
  href: "javascript:alert('Hello World!')"
}

export const Disabled = renderButton.bind({})
Disabled.args = {
  type: 'command',
  disabled: true,
  text: 'New Item',
  icon: 'Add',
  href: "javascript:alert('Hello World!')"
}

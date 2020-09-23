import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderButton (args) {
  const button = document.createElement('FLUENT-BUTTON')

  button.addEventListener('click', action('click'))

  for (const prop in args) {
    button[prop] = args[prop]
  }

  return button
}

export default {
  title: 'Basic Inputs/Button/Button/Icon',
  component: 'fluent-button',
  argTypes
}

export const Standard = renderButton.bind({})
Standard.args = {
  type: 'icon',
  icon: 'Emoji2'
}

export const Checked = renderButton.bind({})
Checked.args = {
  type: 'icon',
  checked: true,
  icon: 'Emoji2'
}

export const Disabled = renderButton.bind({})
Disabled.args = {
  type: 'icon',
  disabled: true,
  icon: 'Emoji2'
}

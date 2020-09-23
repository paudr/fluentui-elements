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
  title: 'Basic Inputs/Button/Button/Default',
  component: 'fluent-button',
  argTypes
}

export const Standard = renderButton.bind({})
Standard.args = {
  text: 'Standard'
}

export const Primary = renderButton.bind({})
Primary.args = {
  primary: true,
  text: 'Primary'
}

export const Checked = renderButton.bind({})
Checked.args = {
  checked: true,
  text: 'Checked'
}

export const PrimaryChecked = renderButton.bind({})
PrimaryChecked.args = {
  primary: true,
  checked: true,
  text: 'Primary Checked'
}

export const Disabled = renderButton.bind({})
Disabled.args = {
  disabled: true,
  text: 'Disabled'
}

export const PrimaryDisabled = renderButton.bind({})
PrimaryDisabled.args = {
  primary: true,
  disabled: true,
  text: 'Disabled'
}

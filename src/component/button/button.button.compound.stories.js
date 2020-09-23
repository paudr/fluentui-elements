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
  title: 'Basic Inputs/Button/Button/Compound',
  component: 'fluent-button',
  argTypes
}

export const Standard = renderButton.bind({})
Standard.args = {
  type: 'compound',
  text: 'Standard',
  secondaryText: 'This is the secondary text.'
}

export const Primary = renderButton.bind({})
Primary.args = {
  type: 'compound',
  primary: true,
  text: 'Primary',
  secondaryText: 'This is the secondary text.'
}

export const Checked = renderButton.bind({})
Checked.args = {
  type: 'compound',
  checked: true,
  text: 'Checked',
  secondaryText: 'This is the secondary text.'
}

export const PrimaryChecked = renderButton.bind({})
PrimaryChecked.args = {
  type: 'compound',
  primary: true,
  checked: true,
  text: 'Primary Checked',
  secondaryText: 'This is the secondary text.'
}

export const Disabled = renderButton.bind({})
Disabled.args = {
  type: 'compound',
  disabled: true,
  text: 'Disabled',
  secondaryText: 'This is the secondary text.'
}

export const PrimaryDisabled = renderButton.bind({})
PrimaryDisabled.args = {
  type: 'compound',
  primary: true,
  disabled: true,
  text: 'Disabled',
  secondaryText: 'This is the secondary text.'
}

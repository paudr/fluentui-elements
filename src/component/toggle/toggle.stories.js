import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderToggle (args) {
  const toggle = document.createElement('FLUENT-TOGGLE')
  toggle.addEventListener('keydown', event => event.stopPropagation())

  toggle.addEventListener('change', action('change'))

  for (const prop in args) {
    toggle[prop] = args[prop]
  }

  return toggle
}

export default {
  title: 'Basic Inputs/Toggle',
  component: 'fluent-toggle',
  argTypes
}

export const EnabledAndChecked = renderToggle.bind({})
EnabledAndChecked.args = {
  checked: true,
  label: 'Enabled and checked',
  onText: 'On',
  offText: 'Off'
}

export const EnabledAndUnchecked = renderToggle.bind({})
EnabledAndUnchecked.args = {
  label: 'Enabled and unchecked',
  onText: 'On',
  offText: 'Off'
}

export const DisableAndChecked = renderToggle.bind({})
DisableAndChecked.args = {
  checked: true,
  label: 'Disable and checked',
  onText: 'On',
  offText: 'Off',
  disabled: true
}

export const DisableAndUnchecked = renderToggle.bind({})
DisableAndUnchecked.args = {
  label: 'Disable and unchecked',
  onText: 'On',
  offText: 'Off',
  disabled: true
}

export const WithoutText = renderToggle.bind({})
WithoutText.args = {
  label: 'Without text'
}

export const WithInlineLabel = renderToggle.bind({})
WithInlineLabel.args = {
  label: 'With inline label',
  onText: 'On',
  offText: 'Off',
  inline: true
}

export const DisabledWithInlineLabel = renderToggle.bind({})
DisabledWithInlineLabel.args = {
  label: 'Disabled with inline label',
  onText: 'On',
  offText: 'Off',
  inline: true,
  disabled: true
}

export const WithInlineLabelAndWithoutOnTextAndOffText = renderToggle.bind({})
WithInlineLabelAndWithoutOnTextAndOffText.args = {
  label: 'With inline label and without onText and offText',
  inline: true
}

export const DisabledWithInlineLabelAndWithoutOnTextAndOffText = renderToggle.bind(
  {}
)
DisabledWithInlineLabelAndWithoutOnTextAndOffText.args = {
  label: 'With inline label and without onText and offText',
  disabled: true,
  inline: true
}

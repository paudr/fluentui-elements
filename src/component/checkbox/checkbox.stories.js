import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderCheckBox (args) {
  const checkbox = document.createElement('FLUENT-CHECKBOX')

  checkbox.addEventListener('change', action('change'))

  for (const prop in args) {
    checkbox[prop] = args[prop]
  }

  const container = document.createElement('DIV')
  const button = document.createElement('FLUENT-BUTTON')
  button.text = 'Show checkbox value'
  button.addEventListener('click', () => {
    console.log(checkbox.value)
    alert(checkbox.value)
  })

  container.appendChild(checkbox)
  container.appendChild(document.createElement('BR'))
  container.appendChild(button)

  return container
}

export default {
  title: 'Basic Inputs/Checkbox',
  component: 'fluent-checkbox',
  argTypes
}

export const Normal = renderCheckBox.bind({})
Normal.args = {
  label: 'Checkbox'
}

export const Checked = renderCheckBox.bind({})
Checked.args = {
  label: 'Checkbox',
  checked: true
}

export const Disabled = renderCheckBox.bind({})
Disabled.args = {
  label: 'Disabled Checkbox',
  disabled: true
}

export const DisabledChecked = renderCheckBox.bind({})
DisabledChecked.args = {
  label: 'Disabled Checkbox',
  checked: true,
  disabled: true
}

export const Indeterminate = renderCheckBox.bind({})
Indeterminate.args = {
  label: 'Indeterminate Checkbox',
  indeterminate: true
}

export const IndeterminateDefaultChecked = renderCheckBox.bind({})
IndeterminateDefaultChecked.args = {
  label: 'Indeterminate checkbox which defaults to true when clicked',
  indeterminate: true,
  defaultChecked: true
}

export const IndeterminateDisabled = renderCheckBox.bind({})
IndeterminateDisabled.args = {
  label: 'Indeterminate Checkbox',
  indeterminate: true,
  disabled: true
}

export const BoxSideEnd = renderCheckBox.bind({})
BoxSideEnd.args = {
  label: 'Checkbox rendered with boxSide "end"',
  boxSide: 'end'
}

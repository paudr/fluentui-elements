import argTypes from './arg-types'
import './label'

function renderLabel (args) {
  const label = document.createElement('FLUENT-LABEL')

  for (const prop in args) {
    label[prop] = args[prop]
  }

  return label
}

export default {
  title: 'Basic Inputs/Label',
  component: 'fluent-label',
  argTypes
}

export const Normal = renderLabel.bind({})
Normal.args = {
  textContent: "I'm a Label"
}

export const Required = renderLabel.bind({})
Required.args = {
  textContent: "I'm a required Label",
  required: true
}

export const Disabled = renderLabel.bind({})
Disabled.args = {
  textContent: "I'm a disabled Label",
  disabled: true
}

export const RequiredDisabled = renderLabel.bind({})
RequiredDisabled.args = {
  textContent: "I'm a required and disabled Label",
  required: true,
  disabled: true
}

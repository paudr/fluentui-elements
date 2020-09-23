import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderChoiceGroup (args) {
  const choiceGroup = document.createElement('FLUENT-CHOICE-GROUP')

  choiceGroup.addEventListener('change', action('change'))

  for (const prop in args) {
    choiceGroup[prop] = args[prop]
  }

  return choiceGroup
}

const choiceOptions = [
  { value: 'A', text: 'Option A' },
  { value: 'B', text: 'Option B' },
  { value: 'C', text: 'Option C', disabled: true },
  { value: 'D', text: 'Option D' }
]

export default {
  title: 'Basic Inputs/ChoiceGroup',
  component: 'fluent-choice-group',
  argTypes
}

export const Normal = renderChoiceGroup.bind({})
Normal.args = {
  label: 'Pick one',
  options: choiceOptions
}

export const Required = renderChoiceGroup.bind({})
Required.args = {
  label: 'Pick one',
  options: choiceOptions,
  required: true
}

export const Disabled = renderChoiceGroup.bind({})
Disabled.args = {
  label: 'Pick one',
  options: choiceOptions,
  disabled: true
}

export const InRow = renderChoiceGroup.bind({})
InRow.args = {
  label: 'Pick one',
  options: choiceOptions,
  InRow: true
}

import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './choice-group'

export default {
  title: 'Basic Inputs/ChoiceGroup',
  component: 'fluent-choice-group',
  argTypes
}

export function Standard (args) {
  const choiceGroup = document.createElement('FLUENT-CHOICE-GROUP')

  for (const prop in args) {
    choiceGroup[prop] = args[prop]
  }

  choiceGroup.addEventListener('change', action('change'))

  return choiceGroup
}
Standard.args = {
  label: 'Pick one',
  options: [
    { value: 'A', text: 'Option A' },
    { value: 'B', text: 'Option B' },
    { value: 'C', text: 'Option C', disabled: true },
    { value: 'D', text: 'Option D' }
  ]
}

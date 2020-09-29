import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './select'

export default {
  title: 'Basic Inputs/Select',
  component: 'fluent-select',
  argTypes
}

export function Standard (args) {
  const select = document.createElement('FLUENT-SELECT')

  select.addEventListener('change', action('change'))

  for (const prop in args) {
    select[prop] = args[prop]
  }

  return select
}
Standard.args = {
  options: [
    { text: 'Option a', value: 'a' },
    { text: 'Option b', value: 'b' },
    { text: 'Option c', value: 'c' },
    { text: 'Option d', value: 'd', disabled: true },
    { text: 'Option e', value: 'e' }
  ]
}

export const WithGroups = Standard.bind({})
WithGroups.args = {
  options: [
    { text: 'Fruits', type: 'header' },
    { text: 'Apple', value: 'apple' },
    { text: 'Banana', value: 'banana' },
    { text: 'Mango', value: 'mango' },
    { text: 'Orange', value: 'orange', disabled: true },
    { text: 'Passionfruit', value: 'passionfruit' },
    { text: 'Grape', value: 'grape' },
    { type: 'divider' },
    { text: 'Vegetables', type: 'header' },
    { text: 'Broccoli', value: 'broccoli' },
    { text: 'Carrot', value: 'carrot' },
    { text: 'Lettuce', value: 'lettuce' }
  ]
}

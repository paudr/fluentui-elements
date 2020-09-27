import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './date-picker'

function renderDatePicker (args) {
  const dateProps = ['selected', 'today']
  const datePicker = document.createElement('FLUENT-DATE-PICKER')

  for (const prop in args) {
    if (dateProps.includes(prop)) {
      datePicker[prop] = new Date(args[prop])
    } else {
      datePicker[prop] = args[prop]
    }
  }

  datePicker.addEventListener('change', action('change'))

  return datePicker
}

export default {
  title: 'Galleries & Pickers/DatePicker/Basic',
  component: 'fluent-date-picker',
  argTypes
}

export const Normal = renderDatePicker.bind({})
Normal.args = {
  label: 'Date Picker',
  goToday: 'Avui'
}

export const WithDescription = renderDatePicker.bind({})
WithDescription.args = {
  label: 'Date Picker',
  goToday: 'Avui',
  description: 'A fancy description.'
}

export const Invalid = renderDatePicker.bind({})
Invalid.args = {
  label: 'Invalid',
  goToday: 'Avui',
  invalid: true
}

export const WithErrorMessage = renderDatePicker.bind({})
WithErrorMessage.args = {
  label: 'With error message',
  goToday: 'Avui',
  errorMessage: 'Error message'
}

export const Disabled = renderDatePicker.bind({})
Disabled.args = {
  label: 'Disabled',
  goToday: 'Avui',
  disabled: true,
  value: new Date(1642, 11, 25)
}

export const Required = renderDatePicker.bind({})
Required.args = {
  label: 'Required',
  goToday: 'Avui',
  required: true
}

export const RequiredWithoutLabel = renderDatePicker.bind({})
RequiredWithoutLabel.args = {
  goToday: 'Avui',
  required: true
}

export const Borderless = renderDatePicker.bind({})
Borderless.args = {
  label: 'Borderless',
  goToday: 'Avui',
  borderless: true
}

export const NotWritable = renderDatePicker.bind({})
NotWritable.args = {
  label: 'Not Writable Date Picker',
  goToday: 'Avui',
  notWritable: true
}

export const WithPlaceholder = renderDatePicker.bind({})
WithPlaceholder.args = {
  label: 'Date Picker With Placeholder',
  goToday: 'Avui',
  placeholder: 'dia/mes/any'
}

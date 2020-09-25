import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

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
  title: 'Galleries & Pickers/DatePicker/Underlined',
  component: 'fluent-date-picker',
  argTypes
}

export const Normal = renderDatePicker.bind({})
Normal.args = {
  underlined: true,
  label: 'Date Picker',
  goToday: 'Avui'
}

export const WithDescription = renderDatePicker.bind({})
WithDescription.args = {
  underlined: true,
  label: 'Date Picker',
  goToday: 'Avui',
  description: 'A fancy description.'
}

export const Invalid = renderDatePicker.bind({})
Invalid.args = {
  underlined: true,
  label: 'Invalid',
  goToday: 'Avui',
  invalid: true
}

export const WithErrorMessage = renderDatePicker.bind({})
WithErrorMessage.args = {
  underlined: true,
  label: 'With error message',
  goToday: 'Avui',
  errorMessage: 'Error message'
}

export const Disabled = renderDatePicker.bind({})
Disabled.args = {
  underlined: true,
  label: 'Disabled',
  goToday: 'Avui',
  disabled: true,
  value: new Date(1642, 11, 25)
}

export const Required = renderDatePicker.bind({})
Required.args = {
  underlined: true,
  label: 'Required',
  goToday: 'Avui',
  required: true
}

export const RequiredWithoutLabel = renderDatePicker.bind({})
RequiredWithoutLabel.args = {
  underlined: true,
  goToday: 'Avui',
  required: true
}

export const NotWritable = renderDatePicker.bind({})
NotWritable.args = {
  underlined: true,
  label: 'Not Writable Date Picker',
  goToday: 'Avui',
  notWritable: true
}

export const WithPlaceholder = renderDatePicker.bind({})
WithPlaceholder.args = {
  underlined: true,
  label: 'Date Picker With Placeholder',
  goToday: 'Avui',
  placeholder: 'dia/mes/any'
}

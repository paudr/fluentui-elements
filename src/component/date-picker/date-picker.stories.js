import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './date-picker'

export default {
  title: 'Galleries & Pickers/DatePicker',
  component: 'fluent-date-picker',
  argTypes
}

export function Standard (args) {
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
Standard.args = {
  label: 'Date Picker',
  goToday: 'Avui'
}

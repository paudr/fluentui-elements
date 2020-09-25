import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderCalendar (args) {
  const dateProps = ['selected', 'today']
  const calendar = document.createElement('FLUENT-CALENDAR')

  for (const prop in args) {
    if (dateProps.includes(prop)) {
      calendar[prop] = new Date(args[prop])
    } else {
      calendar[prop] = args[prop]
    }
  }

  calendar.addEventListener('change', action('change'))
  calendar.addEventListener(
    'change:currentMonth',
    action('change:currentMonth')
  )
  calendar.addEventListener('change:currentView', action('change:currentView'))

  return calendar
}

export default {
  title: 'Galleries & Pickers/Calendar',
  component: 'fluent-calendar',
  argTypes
}

export const Normal = renderCalendar.bind({})

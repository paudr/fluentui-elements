import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './dropdown'

export default {
  title: 'Basic Inputs/Dropdown',
  component: 'fluent-dropdown',
  argTypes
}

export function Standard (args) {
  const dropdown = document.createElement('FLUENT-DROPDOWN')
  dropdown.addEventListener('keydown', event => event.stopPropagation())

  dropdown.addEventListener('focus', action('focus'))
  dropdown.addEventListener('blur', action('blur'))
  dropdown.addEventListener('input', action('input'))
  dropdown.addEventListener('change', action('change'))

  for (const prop in args) {
    dropdown[prop] = args[prop]
  }

  const container = document.createElement('DIV')
  const paragraph = document.createElement('P')
  const textContent = [
    'Keys:',
    ' - ArrowDown: Highlight next option',
    ' - ArrowUp: Highlight previous option',
    ' - Enter: Select highlighted option',
    ' - Esc: Close dropdown',
    ' - [Letter]: Highlight first option with text starting with letter'
  ]

  textContent.forEach(phrase => {
    const span = document.createElement('SPAN')
    span.textContent = phrase
    paragraph.appendChild(span)
    paragraph.appendChild(document.createElement('BR'))
  })

  container.appendChild(dropdown)
  container.appendChild(paragraph)

  return container
}
Standard.args = {
  label: 'Basic Dropdown',
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
  label: 'Basic Dropdown',
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

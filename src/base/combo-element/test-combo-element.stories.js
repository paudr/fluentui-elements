import './test-combo-element'
import argTypes from './arg-types'

export default {
  title: 'Base Types/ComboElement',
  component: 'test-combo-element',
  argTypes
}

export function Standard (args) {
  const comboElement = document.createElement('TEST-COMBO-ELEMENT')

  for (const prop in args) {
    comboElement[prop] = args[prop]
  }

  const container = document.createElement('DIV')
  const paragraph = document.createElement('P')
  paragraph.textContent =
    'Press "Enter" key with element focused to toggle dropdown'

  container.appendChild(comboElement)
  container.appendChild(paragraph)

  return container
}
Standard.args = {
  label: 'Standard'
}

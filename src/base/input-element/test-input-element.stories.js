import './test-input-element'
import argTypes from './arg-types'

export default {
  title: 'Base Types/InputElement',
  component: 'test-input-element',
  argTypes
}

export function Standard (args) {
  const inputElement = document.createElement('TEST-INPUT-ELEMENT')

  for (const prop in args) {
    inputElement[prop] = args[prop]
  }

  return inputElement
}
Standard.args = {
  label: 'Standard'
}

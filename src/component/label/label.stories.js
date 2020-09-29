import argTypes from './arg-types'
import './label'

export default {
  title: 'Basic Inputs/Label',
  component: 'fluent-label',
  argTypes
}

export function Standard (args) {
  const label = document.createElement('FLUENT-LABEL')

  for (const prop in args) {
    label[prop] = args[prop]
  }

  return label
}
Standard.args = {
  textContent: "I'm a Label"
}

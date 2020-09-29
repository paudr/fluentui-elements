import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './spin-button'

export default {
  title: 'Basic Inputs/SpinButton',
  component: 'fluent-spin-button',
  argTypes
}

export function Standard (args) {
  const spinButton = document.createElement('FLUENT-SPIN-BUTTON')
  spinButton.addEventListener('keydown', event => event.stopPropagation())

  spinButton.addEventListener('change', action('change'))

  for (const prop in args) {
    spinButton[prop] = args[prop]
  }

  return spinButton
}
Standard.args = {
  label: 'Standard'
}

export function CustomTransform (args) {
  const spinButton = Standard(args)
  spinButton.style.marginBottom = '25px'
  spinButton.stringify = value => (value == null ? '' : value.toString(16))
  spinButton.parse = value => {
    const parsed = parseInt(value, 16)
    return value.toLowerCase() === spinButton.stringify(parsed) ? parsed : NaN
  }

  const container = document.createElement('FLUENT-DIV')

  const button = document.createElement('FLUENT-BUTTON')
  button.text = 'Alert value'
  button.addEventListener('click', () => alert(spinButton.value))

  container.appendChild(spinButton)
  container.appendChild(button)

  return container
}
CustomTransform.args = {
  label: 'Hexadecimal field'
}

export function CustomIncrement (args) {
  const spinButton = Standard(args)
  spinButton.style.marginBottom = '25px'
  const min = 0.01
  spinButton.inc = function (value) {
    const inc = Math.max(Math.log(value) / Math.log(this.step ?? 10), min)
    return value + (typeof inc === 'number' ? inc : min)
  }
  spinButton.dec = function (value) {
    const inc = Math.max(Math.log(value) / Math.log(this.step ?? 10), min)
    return value - (typeof inc === 'number' ? inc : min)
  }

  return spinButton
}
CustomIncrement.args = {
  label: 'Logarithmic increment',
  step: 10
}

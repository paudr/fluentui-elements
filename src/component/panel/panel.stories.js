import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './panel'

export default {
  title: 'Surfaces/Panel',
  component: 'fluent-panel',
  argTypes
}

export function Standard (args) {
  const panel = document.createElement('FLUENT-PANEL')

  for (const prop in args) {
    panel[prop] = args[prop]
  }

  panel.addEventListener('close', action('close'))

  const content = document.createElement('P')
  content.textContent = 'Content goes here.'
  panel.appendChild(content)

  return panel
}
Standard.args = {
  width: '500px',
  headerText: 'Missing Subject'
}

export function WithContent (args) {
  const panel = Standard(args)

  const choiceGroup = document.createElement('FLUENT-CHOICE-GROUP')
  choiceGroup.label = 'Pick one'
  choiceGroup.options = [
    { value: 'A', text: 'Option A' },
    { value: 'B', text: 'Option B' },
    { value: 'C', text: 'Option C', disabled: true }
  ]

  const footer = document.createElement('DIV')
  footer.setAttribute('slot', 'footer')
  footer.style.display = 'flex'
  footer.style.justifyContent = 'flex-end'

  const ok = document.createElement('FLUENT-BUTTON')
  ok.primary = true
  ok.text = 'Ok'
  footer.appendChild(ok)

  const cancel = document.createElement('FLUENT-BUTTON')
  cancel.text = 'Cancel'
  cancel.style.marginLeft = '8px'
  footer.appendChild(cancel)

  panel.appendChild(choiceGroup)
  panel.appendChild(footer)

  return panel
}
WithContent.args = {
  type: 'small',
  headerText: 'Panel with footer at bottom'
}

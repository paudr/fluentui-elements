import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './dialog'

export default {
  title: 'Surfaces/Dialog',
  component: 'fluent-dialog',
  argTypes
}

export function Standard (args) {
  const dialog = document.createElement('FLUENT-DIALOG')

  for (const prop in args) {
    dialog[prop] = args[prop]
  }

  dialog.addEventListener('close', action('close'))

  return dialog
}
Standard.args = {
  title: 'Missing Subject',
  text: 'Do you want to send this message without a subject?',
  maxWidth: '400px'
}

export function WithContent (args) {
  const dialog = Standard(args)

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

  dialog.appendChild(choiceGroup)
  dialog.appendChild(footer)

  return dialog
}
WithContent.args = {
  title: 'All emails together',
  text:
    'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
  type: 'largeHeader',
  maxWidth: '400px',
  maxHeight: '250px'
}

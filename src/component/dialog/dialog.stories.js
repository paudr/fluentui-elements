import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderDialog (args) {
  const dialog = document.createElement('FLUENT-DIALOG')

  for (const prop in args) {
    dialog[prop] = args[prop]
  }

  dialog.addEventListener('close', action('close'))

  return dialog
}

function renderDialogWithFooter (args) {
  const dialog = renderDialog(args)

  const container = document.createElement('DIV')
  container.setAttribute('slot', 'footer')
  container.style.display = 'flex'
  container.style.justifyContent = 'flex-end'

  const ok = document.createElement('FLUENT-BUTTON')
  ok.primary = true
  ok.text = 'Ok'
  container.appendChild(ok)

  const cancel = document.createElement('FLUENT-BUTTON')
  cancel.text = 'Cancel'
  cancel.style.marginLeft = '8px'
  container.appendChild(cancel)

  dialog.appendChild(container)

  return dialog
}

export default {
  title: 'Surfaces/Dialog',
  component: 'fluent-dialog',
  argTypes
}

export const Normal = renderDialogWithFooter.bind({})
Normal.args = {
  title: 'Missing Subject',
  text: 'Do you want to send this message without a subject?',
  maxWidth: '400px'
}

export function LargeHeader (args) {
  const dialog = renderDialogWithFooter(args)

  const choiceGroup = document.createElement('FLUENT-CHOICE-GROUP')
  choiceGroup.label = 'Pick one'
  choiceGroup.options = [
    { value: 'A', text: 'Option A' },
    { value: 'B', text: 'Option B' },
    { value: 'C', text: 'Option C', disabled: true }
  ]

  dialog.appendChild(choiceGroup)

  return dialog
}
LargeHeader.args = {
  title: 'All emails together',
  text:
    'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
  type: 'largeHeader',
  maxWidth: '400px',
  maxHeight: '250px'
}

export const Close = renderDialog.bind({})
Close.args = {
  title: 'Alert',
  text: 'You have a notification.',
  type: 'close',
  maxWidth: '400px'
}

export const AutoClose = renderDialog.bind({})
AutoClose.args = {
  title: 'Alert',
  text: 'You have a notification.',
  type: 'close',
  maxWidth: '400px',
  autoClose: true
}

export const Overlay = renderDialog.bind({})
Overlay.args = {
  title: 'Alert',
  text: 'You have a notification.',
  type: 'close',
  maxWidth: '400px',
  overlay: true
}

export const OverlayDark = renderDialog.bind({})
OverlayDark.args = {
  title: 'Alert',
  text: 'You have a notification.',
  type: 'close',
  maxWidth: '400px',
  overlay: true,
  dark: true
}

export const OverlayAutoClose = renderDialog.bind({})
OverlayAutoClose.args = {
  title: 'Alert',
  text: 'You have a notification.',
  type: 'close',
  maxWidth: '400px',
  overlay: true,
  autoClose: true,
  dark: true
}

export const OverlayLightDismiss = renderDialog.bind({})
OverlayLightDismiss.args = {
  title: 'Alert',
  text: 'You have a notification.',
  type: 'close',
  maxWidth: '400px',
  overlay: true,
  isLightDismiss: true,
  dark: true
}

export const OverlayLightDismissAutoClose = renderDialog.bind({})
OverlayLightDismissAutoClose.args = {
  title: 'Alert',
  text: 'You have a notification.',
  type: 'close',
  maxWidth: '400px',
  overlay: true,
  autoClose: true,
  isLightDismiss: true,
  dark: true
}

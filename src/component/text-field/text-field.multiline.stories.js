import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './text-field'

function renderTextFieldMultiline (args) {
  const textField = document.createElement('FLUENT-TEXT-FIELD')
  textField.addEventListener('keydown', event => event.stopPropagation())

  textField.addEventListener('focus', action('focus'))
  textField.addEventListener('blur', action('blur'))
  textField.addEventListener('input', action('input'))
  textField.addEventListener('change', action('change'))
  textField.addEventListener('click', action('click'))
  textField.addEventListener('click:icon', action('click:icon'))

  for (const prop in args) {
    textField[prop] = args[prop]
  }

  textField.multiline = true

  return textField
}

export default {
  title: 'Basic Inputs/TextField/Multiline',
  component: 'fluent-text-field',
  argTypes
}

export const Normal = renderTextFieldMultiline.bind({})
Normal.args = {
  label: 'Standard'
}

export const WithDescription = renderTextFieldMultiline.bind({})
WithDescription.args = {
  label: 'Standard',
  description: 'A fancy description.'
}

export const Invalid = renderTextFieldMultiline.bind({})
Invalid.args = {
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderTextFieldMultiline.bind({})
WithErrorMessage.args = {
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderTextFieldMultiline.bind({})
Disabled.args = {
  label: 'Disabled',
  value:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
  disabled: true
}

export const Required = renderTextFieldMultiline.bind({})
Required.args = {
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderTextFieldMultiline.bind({})
RequiredWithoutLabel.args = {
  required: true
}

export const ReadOnly = renderTextFieldMultiline.bind({})
ReadOnly.args = {
  label: 'Read-only',
  value: 'I am read-only',
  readonly: true
}

export const MaxLength = renderTextFieldMultiline.bind({})
MaxLength.args = {
  label: 'Max length (20)',
  maxlength: 20
}

export const WithAnIcon = renderTextFieldMultiline.bind({})
WithAnIcon.args = {
  label: 'With an icon',
  icon: 'Edit'
}

export const WithPlaceholder = renderTextFieldMultiline.bind({})
WithPlaceholder.args = {
  label: 'With placeholder',
  placeholder: 'Please enter text here'
}

export const DisabledWithPlaceholder = renderTextFieldMultiline.bind({})
DisabledWithPlaceholder.args = {
  label: 'Disabled with placeholder',
  placeholder: 'I am disabled',
  disabled: true
}

export const Borderless = renderTextFieldMultiline.bind({})
Borderless.args = {
  label: 'Borderless single-line TextField',
  placeholder: 'No borders here, forks.',
  borderless: true
}

export function Styled (args) {
  const textField = renderTextFieldMultiline(args)

  const styles = new CSSStyleSheet()
  styles.replaceSync(`
    :host(:not([disabled]):not([underlined]):not([borderless])) #fieldGroup::after {
      border-top-color: red;
    }

    :host #label {
      color: #0078d4;
    }
  `)

  textField.styleSheet = styles
  return textField
}
Styled.args = { label: 'Styled' }

export const NonResizable = renderTextFieldMultiline.bind({})
NonResizable.args = {
  label: 'Non-resizable',
  unresizable: true
}

export const WithAutoAdjustingHeight = renderTextFieldMultiline.bind({})
WithAutoAdjustingHeight.args = {
  label: 'With auto adjusting height',
  autoAdjustHeight: true
}

import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderTextFieldUnderlined (args) {
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

  textField.underlined = true

  return textField
}

export default {
  title: 'Basic Inputs/TextField/Underlined',
  component: 'fluent-text-field',
  argTypes
}

export const Normal = renderTextFieldUnderlined.bind({})
Normal.args = {
  label: 'Standard'
}

export const WithDescription = renderTextFieldUnderlined.bind({})
WithDescription.args = {
  label: 'Standard',
  description: 'A fancy description.'
}

export const Invalid = renderTextFieldUnderlined.bind({})
Invalid.args = {
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderTextFieldUnderlined.bind({})
WithErrorMessage.args = {
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderTextFieldUnderlined.bind({})
Disabled.args = {
  label: 'Disabled',
  value: 'I am disabled',
  disabled: true
}

export const Required = renderTextFieldUnderlined.bind({})
Required.args = {
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderTextFieldUnderlined.bind({})
RequiredWithoutLabel.args = {
  required: true
}

export const ReadOnly = renderTextFieldUnderlined.bind({})
ReadOnly.args = {
  label: 'Read-only',
  value: 'I am read-only',
  readonly: true
}

export const MaxLength = renderTextFieldUnderlined.bind({})
MaxLength.args = {
  label: 'Max length (5)',
  maxlength: 5
}

export const WithAnIcon = renderTextFieldUnderlined.bind({})
WithAnIcon.args = {
  label: 'With an icon',
  icon: 'Calendar'
}

export const WithPlaceholder = renderTextFieldUnderlined.bind({})
WithPlaceholder.args = {
  label: 'With placeholder',
  placeholder: 'Please enter text here'
}

export const DisabledWithPlaceholder = renderTextFieldUnderlined.bind({})
DisabledWithPlaceholder.args = {
  label: 'Disabled with placeholder',
  placeholder: 'I am disabled',
  disabled: true
}

export const WithPrefix = renderTextFieldUnderlined.bind({})
WithPrefix.args = {
  prefix: 'https://'
}

export const WithPrefixDisabled = renderTextFieldUnderlined.bind({})
WithPrefixDisabled.args = {
  prefix: 'https://',
  disabled: true
}

export const WithSufix = renderTextFieldUnderlined.bind({})
WithSufix.args = {
  sufix: '.com'
}

export const WithPrefixAndSufix = renderTextFieldUnderlined.bind({})
WithPrefixAndSufix.args = {
  prefix: 'https://',
  sufix: '.com'
}

export function Styled () {
  const textField = renderTextFieldUnderlined.bind({})({ label: 'Standard' })

  const styles = new CSSStyleSheet()
  styles.replaceSync(`
    :host #label {
      color: #0078d4;
    }
  `)

  textField.styleSheet = styles
  return textField
}

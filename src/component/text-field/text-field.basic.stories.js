import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderTextField (args) {
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

  return textField
}

export default {
  title: 'Basic Inputs/TextField/Basic',
  component: 'fluent-text-field',
  argTypes
}

export const Normal = renderTextField.bind({})
Normal.title = 'Basic Inputs/TextField/Basic'
Normal.args = {
  label: 'Standard'
}

export const WithDescription = renderTextField.bind({})
WithDescription.args = {
  label: 'Standard',
  description: 'A fancy description.'
}

export const Invalid = renderTextField.bind({})
Invalid.args = {
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderTextField.bind({})
WithErrorMessage.args = {
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderTextField.bind({})
Disabled.args = {
  label: 'Disabled',
  value: 'I am disabled',
  disabled: true
}

export const Required = renderTextField.bind({})
Required.args = {
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderTextField.bind({})
RequiredWithoutLabel.args = {
  required: true
}

export const ReadOnly = renderTextField.bind({})
ReadOnly.args = {
  label: 'Read-only',
  value: 'I am read-only',
  readonly: true
}

export const MaxLength = renderTextField.bind({})
MaxLength.args = {
  label: 'Max length (5)',
  maxlength: 5
}

export const WithAnIcon = renderTextField.bind({})
WithAnIcon.args = {
  label: 'With an icon',
  icon: 'Calendar'
}

export const WithPlaceholder = renderTextField.bind({})
WithPlaceholder.args = {
  label: 'With placeholder',
  placeholder: 'Please enter text here'
}

export const DisabledWithPlaceholder = renderTextField.bind({})
DisabledWithPlaceholder.args = {
  label: 'Disabled with placeholder',
  placeholder: 'I am disabled',
  disabled: true
}

export const Borderless = renderTextField.bind({})
Borderless.args = {
  label: 'Borderless single-line TextField',
  placeholder: 'No borders here, forks.',
  borderless: true
}

export const WithPrefix = renderTextField.bind({})
WithPrefix.args = {
  prefix: 'https://'
}

export const WithPrefixDisabled = renderTextField.bind({})
WithPrefixDisabled.args = {
  prefix: 'https://',
  disabled: true
}

export const WithSufix = renderTextField.bind({})
WithSufix.args = {
  sufix: '.com'
}

export const WithPrefixAndSufix = renderTextField.bind({})
WithPrefixAndSufix.args = {
  prefix: 'https://',
  sufix: '.com'
}

export function Styled (args) {
  const textField = renderTextField(args)

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

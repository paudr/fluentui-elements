import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './autofill'

export default {
  title: 'Utilities/Autofill',
  component: 'fluent-autofill',
  argTypes
}

export function Standard (args) {
  const autofill = document.createElement('FLUENT-AUTOFILL')
  autofill.style.border = '1px solid black'

  for (const prop in args) {
    autofill[prop] = args[prop]
  }

  autofill.addEventListener('input', action('input'))
  autofill.addEventListener('change', action('change'))
  autofill.addEventListener('keydown', event => {
    event.stopPropagation()
    action('keydown')
  })

  return autofill
}

export function SuggestMethod (args) {
  const autofill = Standard(args)
  autofill.style.gridArea = 'autofill'

  const container = document.createElement('DIV')
  container.tabIndex = 0
  container.style.outline = '0'
  container.style.display = 'grid'
  container.style.gridTemplateAreas = '"autofill autofill" "textField button"'
  container.addEventListener('keydown', event => event.stopPropagation())

  const textField = document.createElement('FLUENT-TEXT-FIELD')
  textField.style.gridArea = 'textField'

  const button = document.createElement('FLUENT-BUTTON')
  button.text = 'suggest'
  button.style.gridArea = 'button'
  button.addEventListener('click', () => autofill.suggest(textField.value))

  container.appendChild(autofill)
  container.appendChild(textField)
  container.appendChild(button)

  return container
}

export function InlineViewer (args) {
  const autofill = Standard(args)
  autofill.style.border = ''
  autofill.style.backgroundColor = 'rgba(255, 146, 178, 0.4)'

  const container = document.createElement('DIV')
  container.style.border = '1px solid black'
  container.style.padding = '0'

  const span = document.createElement('SPAN')
  span.textContent = 'Text: '
  span.style.backgroundColor = 'rgba(146, 255, 178, 0.4)'

  container.appendChild(span)
  container.appendChild(autofill)

  return container
}

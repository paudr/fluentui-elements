import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import iconCode from '../icon/code'
import './combo-box'

function renderComboBox (args) {
  const comboBox = document.createElement('FLUENT-COMBO-BOX')
  comboBox.addEventListener('keydown', event => event.stopPropagation())

  comboBox.addEventListener('focus', action('focus'))
  comboBox.addEventListener('blur', action('blur'))
  comboBox.addEventListener('input', action('input'))
  comboBox.addEventListener('change', action('change'))

  for (const prop in args) {
    comboBox[prop] = args[prop]
  }

  const container = document.createElement('DIV')
  const paragraph = document.createElement('P')
  const textContent = [
    'Keys:',
    ' - ArrowDown: Highlight next option',
    ' - ArrowUp: Highlight previous option',
    ' - Enter: Select highlighted option',
    ' - Esc: Close dropdown'
  ]

  textContent.forEach(phrase => {
    const span = document.createElement('SPAN')
    span.textContent = phrase
    paragraph.appendChild(span)
    paragraph.appendChild(document.createElement('BR'))
  })

  container.appendChild(comboBox)
  container.appendChild(paragraph)

  return container
}

const iconOptions = Object.keys(iconCode).map(name => ({
  text: name,
  value: [name]
}))

const fruitOptions = [
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Mango', value: 'mango' },
  { text: 'Orange', value: 'orange' },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Grape', value: 'grape' }
]

const accentItems = [
  { text: 'menjàrem', value: 'menjarem' },
  { text: 'bàscula', value: 'bascula' },
  { text: 'vàlid', value: 'valid' },
  { text: 'matalàs', value: 'matalas' },
  { text: 'pàmfil', value: 'pamfil' },
  { text: 'interès', value: 'interes' },
  { text: 'bèstia', value: 'bestia' },
  { text: 'mèrit', value: 'merit' },
  { text: 'canapè', value: 'canape' },
  { text: 'perquè', value: 'perque' },
  { text: 'cèntim', value: 'centim' },
  { text: 'mòdul', value: 'modul' },
  { text: 'allò', value: 'allo' },
  { text: 'òliba', value: 'oliba' },
  { text: 'repòs', value: 'repos' },
  { text: 'Sònia', value: 'Sonia' },
  { text: 'arròsvindré', value: 'arrosvindre' },
  { text: 'créixens', value: 'creixens' },
  { text: 'haguéreu', value: 'haguereu' },
  { text: 'accés', value: 'acces' },
  { text: 'també', value: 'tambe' },
  { text: 'Berlín', value: 'Berlin' },
  { text: 'pastís', value: 'pastis' },
  { text: 'legítima', value: 'legitima' },
  { text: 'veí', value: 'vei' },
  { text: 'rítmic', value: 'ritmic' },
  { text: 'tísic', value: 'tisic' },
  { text: 'pastós', value: 'pastos' },
  { text: 'furóncol', value: 'furoncol' },
  { text: 'tórtora', value: 'tortora' },
  { text: 'cantó', value: 'canto' },
  { text: 'institució', value: 'institucio' },
  { text: 'cautxú', value: 'cautxu' },
  { text: 'múscul', value: 'muscul' },
  { text: 'fúcsia', value: 'fucsia' },
  { text: 'brúixola', value: 'bruixola' },
  { text: 'pallús', value: 'pallus' }
]

export default {
  title: 'Basic Inputs/ComboBox/Underlined',
  component: 'fluent-combo-box',
  argTypes
}

export const Normal = renderComboBox.bind({})
Normal.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Standard'
}

export const WithDescription = renderComboBox.bind({})
WithDescription.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Standard',
  description: 'A fancy description.'
}

export const Invalid = renderComboBox.bind({})
Invalid.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Invalid',
  invalid: true
}

export const WithErrorMessage = renderComboBox.bind({})
WithErrorMessage.args = {
  options: fruitOptions,
  underlined: true,
  label: 'With error message',
  errorMessage: 'Error message'
}

export const Disabled = renderComboBox.bind({})
Disabled.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Disabled',
  value: 'I am disabled',
  disabled: true
}

export const Required = renderComboBox.bind({})
Required.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderComboBox.bind({})
RequiredWithoutLabel.args = {
  options: fruitOptions,
  underlined: true,
  required: true
}

export const Multiple = renderComboBox.bind({})
Multiple.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Multiple',
  multiple: true
}

export const NormalAllowFreeform = renderComboBox.bind({})
NormalAllowFreeform.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Standar with allow freeform',
  allowFreeform: true
}

export const MultipleAllowFreeform = renderComboBox.bind({})
MultipleAllowFreeform.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Multiple with allow freeform',
  multiple: true,
  allowFreeform: true
}

export const NormalAutoComplete = renderComboBox.bind({})
NormalAutoComplete.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Standar with allow freeform and autoComplete',
  allowFreeform: true,
  autoComplete: true
}

export const MultipleAutoComplete = renderComboBox.bind({})
MultipleAutoComplete.args = {
  options: fruitOptions,
  underlined: true,
  label: 'Multiple with allow freeform and autoComplete',
  multiple: true,
  allowFreeform: true,
  autoComplete: true
}

export const Placeholder = renderComboBox.bind({})
Placeholder.args = {
  options: iconOptions,
  underlined: true,
  label: 'Multiple with allow freeform with placeholder',
  placeholder: 'Select an element...',
  multiple: true,
  allowFreeform: true,
  autoComplete: true
}

export function AccentInsensitive (args) {
  const container = document.createElement('DIV')
  const paragraph = document.createElement('P')
  paragraph.textContent = `Word list: ${accentItems
    .map(item => item.text)
    .join(', ')}`

  container.appendChild(paragraph)
  container.appendChild(
    renderComboBox({
      ...args,
      label: 'ComboBox accent sensitive',
      accentInsensitive: false
    })
  )

  container.appendChild(
    renderComboBox({
      ...args,
      label: 'ComboBox accent insensitive',
      accentInsensitive: true
    })
  )

  return container
}
AccentInsensitive.args = {
  options: accentItems,
  underlined: true,
  allowFreeform: true,
  autoComplete: true
}

export const ReadOnly = renderComboBox.bind({})
ReadOnly.args = {
  options: fruitOptions,
  underlined: true,
  label: 'ReadOnly',
  value: 'banana',
  readonly: true
}

import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './combo-box'

export default {
  title: 'Basic Inputs/ComboBox',
  component: 'fluent-combo-box',
  argTypes
}

export function Standard (args) {
  const comboBox = document.createElement('FLUENT-COMBO-BOX')

  for (const prop in args) {
    comboBox[prop] = args[prop]
  }

  comboBox.addEventListener('keydown', event => event.stopPropagation())

  comboBox.addEventListener('focus', action('focus'))
  comboBox.addEventListener('blur', action('blur'))
  comboBox.addEventListener('input', action('input'))
  comboBox.addEventListener('change', action('change'))

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
Standard.args = {
  label: 'Standard',
  options: [
    { text: 'Apple', value: 'apple' },
    { text: 'Banana', value: 'banana' },
    { text: 'Mango', value: 'mango' },
    { text: 'Orange', value: 'orange' },
    { text: 'Passionfruit', value: 'passionfruit' },
    { text: 'Grape', value: 'grape' }
  ]
}

export const AccentInsensitive = Standard.bind({})
AccentInsensitive.args = {
  label: 'Standard',
  options: [
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
}

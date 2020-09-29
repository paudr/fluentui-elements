import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import iconCode from '../icon/code'
import './tag-picker'

export default {
  title: 'Galleries & Pickers/TagPicker',
  component: 'fluent-tag-picker',
  argTypes
}

export function Standard (args) {
  const tagPicker = document.createElement('FLUENT-TAG-PICKER')
  tagPicker.addEventListener('keydown', event => event.stopPropagation())

  for (const prop in args) {
    if (prop === 'items') {
      tagPicker.getItems = function mockRest (text) {
        return new Promise(function (resolve) {
          const lower = text.toLowerCase()
          const items = args.items.filter(item =>
            item.text.toLowerCase().startsWith(lower)
          )
          setTimeout(() => resolve(items), Math.random() * 700 + 50)
        })
      }
    } else {
      tagPicker[prop] = args[prop]
    }
  }

  tagPicker.addEventListener('change', action('change'))

  return tagPicker
}
Standard.args = {
  label: 'Tag Picker',
  getItemsRate: 250,
  items: Object.keys(iconCode).map(name => ({
    text: name,
    value: [name]
  }))
}

export function AccentInsensitive (args) {
  const container = document.createElement('DIV')
  const paragraph = document.createElement('P')
  paragraph.textContent = `Word list: ${args.items
    .map(item => item.text)
    .join(', ')}`

  container.appendChild(paragraph)
  container.appendChild(
    Standard({
      ...args,
      label: 'Tag Picker accent sensitive',
      accentInsensitive: false
    })
  )

  container.appendChild(
    Standard({
      ...args,
      label: 'Tag Picker accent insensitive',
      accentInsensitive: true
    })
  )

  return container
}
AccentInsensitive.args = {
  getItemsRate: 250,
  items: [
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

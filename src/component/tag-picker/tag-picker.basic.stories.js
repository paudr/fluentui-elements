import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import iconCode from '../icon/code'

function renderTagPicker (args) {
  const tagPicker = document.createElement('FLUENT-TAG-PICKER')
  tagPicker.addEventListener('keydown', event => event.stopPropagation())

  for (const prop in args) {
    tagPicker[prop] = args[prop]
  }

  tagPicker.addEventListener('change', action('change'))

  return tagPicker
}

const iconItems = Object.keys(iconCode).map(name => ({
  text: name,
  value: [name]
}))

function getMockRest (options) {
  return function mockRest (text) {
    return new Promise(resolve => {
      const lower = text.toLowerCase()
      const items = options.filter(item =>
        item.text.toLowerCase().startsWith(lower)
      )
      setTimeout(() => resolve(items), Math.random() * 700 + 50)
    })
  }
}

export default {
  title: 'Galleries & Pickers/TagPicker/Basic',
  component: 'fluent-tag-picker',
  argTypes
}

export const Normal = renderTagPicker.bind({})
Normal.args = {
  label: 'Tag Picker',
  getItems: getMockRest(iconItems),
  getItemsRate: 250
}

export const WithDescription = renderTagPicker.bind({})
WithDescription.args = {
  label: 'Tag Picker',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  description: 'A fancy description.'
}

export const Invalid = renderTagPicker.bind({})
Invalid.args = {
  label: 'Invalid',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  invalid: true
}

export const WithErrorMessage = renderTagPicker.bind({})
WithErrorMessage.args = {
  label: 'With error message',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  errorMessage: 'Error message'
}

export const Disabled = renderTagPicker.bind({})
Disabled.args = {
  label: 'Disabled Tag Picker',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  disabled: true,
  value: [
    { text: 'Hello', key: 'hello' },
    { text: 'World', key: 'world' }
  ]
}

export const Required = renderTagPicker.bind({})
Required.args = {
  label: 'Required',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  required: true
}

export const RequiredWithoutLabel = renderTagPicker.bind({})
RequiredWithoutLabel.args = {
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  required: true
}

export const Placeholder = renderTagPicker.bind({})
Placeholder.args = {
  label: 'Tag Picker',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  placeholder: 'Pick an item'
}

export const Borderless = renderTagPicker.bind({})
Borderless.args = {
  label: 'Tag Picker',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  placeholder: 'Pick an item',
  borderless: true
}

export const FilterSelectedItems = renderTagPicker.bind({})
FilterSelectedItems.args = {
  label: 'Tag Picker',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  filterItems: true
}

export const MaxSelectedItems = renderTagPicker.bind({})
MaxSelectedItems.args = {
  label: 'Pick up to three elements',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  maxSelectedItems: 3
}

export const MaxSelectedItemsWithPlaceholder = renderTagPicker.bind({})
MaxSelectedItemsWithPlaceholder.args = {
  label: 'Pick up to three elements',
  getItems: getMockRest(iconItems),
  getItemsRate: 250,
  placeholder: 'Pick an item',
  maxSelectedItems: 3
}

export function AccentInsensitive (args) {
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

  const container = document.createElement('DIV')
  const paragraph = document.createElement('P')
  paragraph.textContent = `Word list: ${accentItems
    .map(item => item.text)
    .join(', ')}`

  container.appendChild(paragraph)
  container.appendChild(
    renderTagPicker({
      ...args,
      label: 'Tag Picker accent sensitive',
      getItems: getMockRest(accentItems),
      accentInsensitive: false
    })
  )

  container.appendChild(
    renderTagPicker({
      ...args,
      label: 'Tag Picker accent insensitive',
      getItems: getMockRest(accentItems),
      accentInsensitive: true
    })
  )

  return container
}
AccentInsensitive.args = {
  getItemsRate: 250
}

import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './pivot'

export default {
  title: 'Commands, Menus & Navs/Pivot',
  component: 'fluent-pivot',
  argTypes
}

export function Standard (args) {
  const pivot = document.createElement('FLUENT-PIVOT')

  for (const prop in args) {
    pivot[prop] = args[prop]
  }

  pivot.addEventListener('change', action('change'))

  return pivot
}
Standard.args = {
  tabs: [
    { text: 'My files', value: 'files', icon: 'Emoji2', count: 42 },
    { text: 'Recent', value: 'recent', icon: 'Recent', count: 23 },
    { text: 'Shared with me', value: 'shared', icon: 'Ringer', count: 1 }
  ]
}

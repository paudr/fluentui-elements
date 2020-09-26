import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderPivot (args) {
  const pivot = document.createElement('FLUENT-PIVOT')

  for (const prop in args) {
    pivot[prop] = args[prop]
  }

  pivot.addEventListener('change', action('change'))

  return pivot
}

const fullTabs = [
  { text: 'My files', value: 'files', icon: 'Emoji2', count: 42 },
  { text: 'Recent', value: 'recent', icon: 'Recent', count: 23 },
  { text: 'Shared with me', value: 'shared', icon: 'Ringer', count: 1 }
]

const onlyTextTabs = fullTabs.map(tab => ({
  text: tab.text,
  value: tab.value
}))

const withIconsTabs = fullTabs.map(tab => ({
  text: tab.text,
  value: tab.value,
  icon: tab.icon
}))

export default {
  title: 'Commands, Menus & Navs/Pivot',
  component: 'fluent-pivot',
  argTypes
}

export const OnlyText = renderPivot.bind({})
OnlyText.args = {
  tabs: onlyTextTabs
}

export const WithIcons = renderPivot.bind({})
WithIcons.args = {
  tabs: withIconsTabs
}

export const FullTabs = renderPivot.bind({})
FullTabs.args = {
  tabs: fullTabs
}

export const Large = renderPivot.bind({})
Large.args = {
  tabs: onlyTextTabs,
  large: true
}

export const TabStyle = renderPivot.bind({})
TabStyle.args = {
  tabs: onlyTextTabs,
  tabStyle: true
}

export const LargeTabStyle = renderPivot.bind({})
LargeTabStyle.args = {
  tabs: onlyTextTabs,
  large: true,
  tabStyle: true
}

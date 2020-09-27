import argTypes from './arg-types'
import './icon'

function renderIcon (args) {
  const icon = document.createElement('FLUENT-ICON')
  icon.style.fontSize = '50px'
  icon.style.height = '50px'
  icon.style.width = '50px'

  for (const prop in args) {
    icon[prop] = args[prop]
  }

  return icon
}

export default {
  title: 'Basic Inputs/Icon',
  component: 'fluent-icon',
  argTypes
}

export const Normal = renderIcon.bind({})
Normal.args = { name: 'CompassNW' }

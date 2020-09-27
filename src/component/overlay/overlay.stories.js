import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './overlay'

function renderOverlay (args) {
  const overlay = document.createElement('FLUENT-OVERLAY')

  for (const prop in args) {
    overlay[prop] = args[prop]
  }

  overlay.addEventListener('click', action('click'))

  const content = document.createElement('D')
  content.style.position = 'absolute'
  content.style.right = '0px'
  content.style.bottom = '0px'
  content.style.left = '0px'
  content.style.padding = '10px'
  content.style.background = 'blue'
  content.style.color = 'white'

  const paragraph = document.createElement('P')
  paragraph.textContent = 'I am content within the overlay.'

  content.appendChild(paragraph)
  overlay.appendChild(content)

  return overlay
}

export default {
  title: 'Utilities/Overlay',
  component: 'fluent-overlay',
  argTypes
}

export const Normal = renderOverlay.bind({})

export const Dark = renderOverlay.bind({})
Dark.args = {
  dark: true
}

export const AutoClose = renderOverlay.bind({})
AutoClose.args = {
  autoClose: true
}

export const DarkAutoClose = renderOverlay.bind({})
DarkAutoClose.args = {
  dark: true,
  autoClose: true
}

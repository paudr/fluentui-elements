import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './panel'

function renderPanel (args) {
  const panel = document.createElement('FLUENT-PANEL')

  for (const prop in args) {
    panel[prop] = args[prop]
  }

  panel.addEventListener('close', action('close'))

  const content = document.createElement('P')
  content.textContent = 'Content goes here.'
  panel.appendChild(content)

  return panel
}

export default {
  title: 'Surfaces/Panel',
  component: 'fluent-panel',
  argTypes
}

export const CustomWidth = renderPanel.bind({})
CustomWidth.args = {
  width: '500px',
  headerText: 'Missing Subject'
}

export const ExtraSmall = renderPanel.bind({})
ExtraSmall.args = {
  type: 'extraSmall',
  headerText: 'Missing Subject'
}

export const Small = renderPanel.bind({})
Small.args = {
  type: 'small',
  headerText: 'Missing Subject'
}

export const Medium = renderPanel.bind({})
Medium.args = {
  type: 'medium',
  headerText: 'Missing Subject'
}

export const Large = renderPanel.bind({})
Large.args = {
  type: 'large',
  headerText: 'Missing Subject'
}

export const ExtraLarge = renderPanel.bind({})
ExtraLarge.args = {
  type: 'extraLarge',
  headerText: 'Missing Subject'
}

export const Fluid = renderPanel.bind({})
Fluid.args = {
  type: 'fluid',
  headerText: 'Missing Subject'
}

export const Left = renderPanel.bind({})
Left.args = {
  type: 'small',
  headerText: 'Missing Subject',
  left: true
}

export function Footer (args) {
  const panel = renderPanel(args)

  const container = document.createElement('DIV')
  container.setAttribute('slot', 'footer')
  container.style.display = 'flex'
  container.style.justifyContent = 'flex-end'

  const ok = document.createElement('FLUENT-BUTTON')
  ok.primary = true
  ok.text = 'Ok'
  container.appendChild(ok)

  const cancel = document.createElement('FLUENT-BUTTON')
  cancel.text = 'Cancel'
  cancel.style.marginLeft = '8px'
  container.appendChild(cancel)

  panel.appendChild(container)

  return panel
}
Footer.args = {
  type: 'small',
  headerText: 'Panel with footer at bottom'
}

export const WithoutCloseButton = renderPanel.bind({})
WithoutCloseButton.args = {
  type: 'small',
  headerText: 'Missing Subject',
  withoutCloseButton: true
}

export const AutoClose = renderPanel.bind({})
AutoClose.args = {
  type: 'small',
  headerText: 'Missing Subject',
  autoClose: true
}

export const Overlay = renderPanel.bind({})
Overlay.args = {
  type: 'small',
  headerText: 'Missing Subject',
  overlay: true
}

export const OverlayDark = renderPanel.bind({})
OverlayDark.args = {
  type: 'small',
  headerText: 'Missing Subject',
  overlay: true,
  dark: true
}

export const OverlayAutoClose = renderPanel.bind({})
OverlayAutoClose.args = {
  type: 'small',
  headerText: 'Missing Subject',
  overlay: true,
  autoClose: true,
  dark: true
}

export const OverlayLightDismiss = renderPanel.bind({})
OverlayLightDismiss.args = {
  type: 'small',
  headerText: 'Missing Subject',
  overlay: true,
  isLightDismiss: true,
  dark: true
}

export const OverlayLightDismissAutoClose = renderPanel.bind({})
OverlayLightDismissAutoClose.args = {
  type: 'small',
  headerText: 'Missing Subject',
  overlay: true,
  autoClose: true,
  isLightDismiss: true,
  dark: true
}

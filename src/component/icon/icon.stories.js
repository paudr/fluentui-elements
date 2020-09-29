import argTypes from './arg-types'
import iconCode from './code'
import './icon'

export default {
  title: 'Basic Inputs/Icon',
  component: 'fluent-icon',
  argTypes
}

export function Standard (args) {
  const icon = document.createElement('FLUENT-ICON')
  icon.style.fontSize = '50px'

  for (const prop in args) {
    icon[prop] = args[prop]
  }

  return icon
}
Standard.args = { name: 'Dictionary' }

export function AllIcons (args) {
  const container = document.createElement('DIV')
  container.style.display = 'flex'
  container.style.flexWrap = 'wrap'
  container.style.justifyContent = 'space-between'

  for (const name in iconCode) {
    const element = document.createElement('DIV')
    element.style.display = 'flex'
    element.style.flexDirection = 'column'
    element.style.alignItems = 'center'
    element.style.margin = '15px'
    element.style.padding = '5px'
    if (args.name === name) {
      element.style.border = '1px solid #0078d4'
    }

    const icon = document.createElement('FLUENT-ICON')
    icon.style.fontSize = '50px'
    icon.name = name

    const label = document.createElement('SPAN')
    label.style.background = 'rgb(242, 242, 242)'
    label.style.padding = '4px'
    label.style.borderRadius = '4px'
    label.style.marginTop = '5px'
    label.textContent = name

    element.appendChild(icon)
    element.appendChild(label)

    container.appendChild(element)
  }

  return container
}

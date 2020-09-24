import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderSearchBox (args) {
  const searchBox = document.createElement('FLUENT-SEARCH-BOX')
  searchBox.addEventListener('keydown', event => event.stopPropagation())

  searchBox.addEventListener('change', action('change'))
  searchBox.addEventListener('input', action('input'))
  searchBox.addEventListener('search', action('search'))
  searchBox.addEventListener('escape', action('escape'))

  for (const prop in args) {
    searchBox[prop] = args[prop]
  }

  return searchBox
}

export default {
  title: 'Basic Inputs/SearchBox/Underlined',
  component: 'fluent-search-box',
  argTypes
}

export const Normal = renderSearchBox.bind({})
Normal.args = {
  underlined: true
}

export const WithLabel = renderSearchBox.bind({})
WithLabel.args = {
  underlined: true,
  label: 'Query string:'
}

export const WithDescription = renderSearchBox.bind({})
WithDescription.args = {
  underlined: true,
  description: 'A fancy description.'
}

export const Invalid = renderSearchBox.bind({})
Invalid.args = {
  underlined: true,
  Invalid: true
}

export const WithErrorMessage = renderSearchBox.bind({})
WithErrorMessage.args = {
  underlined: true,
  errorMessage: 'Error message'
}

export const Disabled = renderSearchBox.bind({})
Disabled.args = {
  underlined: true,
  disabled: true
}

export const Required = renderSearchBox.bind({})
Required.args = {
  underlined: true,
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderSearchBox.bind({})
RequiredWithoutLabel.args = {
  underlined: true,
  required: true
}

export const NoAnimations = renderSearchBox.bind({})
NoAnimations.args = {
  underlined: true,
  disableAnimation: true
}

export const CustomIcon = renderSearchBox.bind({})
CustomIcon.args = {
  underlined: true,
  icon: 'Filter',
  placeholder: 'Filter'
}

export const Borderless = renderSearchBox.bind({})
Borderless.args = {
  underlined: true,
  borderless: true
}

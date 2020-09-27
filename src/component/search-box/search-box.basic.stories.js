import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './search-box'

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
  title: 'Basic Inputs/SearchBox/Basic',
  component: 'fluent-search-box',
  argTypes
}

export const Normal = renderSearchBox.bind({})

export const WithLabel = renderSearchBox.bind({})
WithLabel.args = {
  label: 'Query string:'
}

export const WithDescription = renderSearchBox.bind({})
WithDescription.args = {
  description: 'A fancy description.'
}

export const Invalid = renderSearchBox.bind({})
Invalid.args = {
  Invalid: true
}

export const WithErrorMessage = renderSearchBox.bind({})
WithErrorMessage.args = {
  errorMessage: 'Error message'
}

export const Disabled = renderSearchBox.bind({})
Disabled.args = {
  disabled: true
}

export const Required = renderSearchBox.bind({})
Required.args = {
  label: 'Required',
  required: true
}

export const RequiredWithoutLabel = renderSearchBox.bind({})
RequiredWithoutLabel.args = {
  required: true
}

export const NoAnimations = renderSearchBox.bind({})
NoAnimations.args = {
  disableAnimation: true
}

export const CustomIcon = renderSearchBox.bind({})
CustomIcon.args = {
  icon: 'Filter',
  placeholder: 'Filter'
}

export const Borderless = renderSearchBox.bind({})
Borderless.args = {
  borderless: true
}

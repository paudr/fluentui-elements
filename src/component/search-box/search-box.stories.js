import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './search-box'

export default {
  title: 'Basic Inputs/SearchBox',
  component: 'fluent-search-box',
  argTypes
}

export function Standard (args) {
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

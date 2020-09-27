import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './select'

function renderSelect (args) {
  const select = document.createElement('FLUENT-SELECT')

  select.addEventListener('change', action('change'))

  for (const prop in args) {
    select[prop] = args[prop]
  }

  return select
}

const optionOptions = [
  { text: 'Option a', value: 'a' },
  { text: 'Option b', value: 'b' },
  { text: 'Option c', value: 'c' },
  { text: 'Option d', value: 'd', disabled: true },
  { text: 'Option e', value: 'e' }
]

const fruitOptions = [
  { text: 'Fruits', type: 'header' },
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Mango', value: 'mango' },
  { text: 'Orange', value: 'orange', disabled: true },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Grape', value: 'grape' },
  { type: 'divider' },
  { text: 'Vegetables', type: 'header' },
  { text: 'Broccoli', value: 'broccoli' },
  { text: 'Carrot', value: 'carrot' },
  { text: 'Lettuce', value: 'lettuce' }
]

export default {
  title: 'Basic Inputs/Select',
  component: 'fluent-select',
  argTypes
}

export const Normal = renderSelect.bind({})
Normal.args = {
  options: optionOptions
}

export const WithGroups = renderSelect.bind({})
WithGroups.args = {
  options: fruitOptions
}

export const WithMaxHeight = renderSelect.bind({})
WithMaxHeight.args = {
  options: fruitOptions,
  maxHeight: '200px'
}

export const Multiple = renderSelect.bind({})
Multiple.args = {
  options: optionOptions,
  multiple: true
}

export const MultipleWithGroups = renderSelect.bind({})
MultipleWithGroups.args = {
  options: fruitOptions,
  multiple: true
}

export const MultipleWithMaxHeight = renderSelect.bind({})
MultipleWithMaxHeight.args = {
  options: fruitOptions,
  multiple: true,
  maxHeight: '200px'
}

export function MarkNextOption (args) {
  const select = renderSelect(args)
  const container = document.createElement('DIV')

  const row = document.createElement('DIV')

  const markPrevious = document.createElement('FLUENT-BUTTON')
  markPrevious.text = 'Mark previous'
  markPrevious.addEventListener('click', () => select.markNextOption(-1))

  const markNone = document.createElement('FLUENT-BUTTON')
  markNone.text = 'Mark none'
  markNone.addEventListener('click', () => (select.markedIndex = -1))

  const markNext = document.createElement('FLUENT-BUTTON')
  markNext.text = 'Mark next'
  markNext.addEventListener('click', () => select.markNextOption(1))

  row.appendChild(markPrevious)
  row.appendChild(markNone)
  row.appendChild(markNext)

  container.appendChild(row)
  container.appendChild(select)

  return container
}
MarkNextOption.args = {
  options: fruitOptions
}

export function ScrollToElement (args) {
  const select = renderSelect(args)
  const container = document.createElement('DIV')

  const firstRow = document.createElement('DIV')

  const markPrevious = document.createElement('FLUENT-BUTTON')
  markPrevious.text = 'Mark previous'
  markPrevious.addEventListener('click', () => select.markNextOption(-1))

  const markNone = document.createElement('FLUENT-BUTTON')
  markNone.text = 'Mark none'
  markNone.addEventListener('click', () => (select.markedIndex = -1))

  const markNext = document.createElement('FLUENT-BUTTON')
  markNext.text = 'Mark next'
  markNext.addEventListener('click', () => select.markNextOption(1))

  const secondRow = document.createElement('DIV')

  const scrollToMarked = document.createElement('FLUENT-BUTTON')
  scrollToMarked.text = 'Scroll to marked'
  scrollToMarked.addEventListener('click', () =>
    select.scrollToElement(select.markedIndex)
  )

  firstRow.appendChild(markPrevious)
  firstRow.appendChild(markNone)
  firstRow.appendChild(markNext)

  secondRow.appendChild(scrollToMarked)

  container.appendChild(firstRow)
  container.appendChild(secondRow)
  container.appendChild(select)

  return container
}
ScrollToElement.args = {
  options: fruitOptions,
  multiple: true,
  maxHeight: '200px'
}

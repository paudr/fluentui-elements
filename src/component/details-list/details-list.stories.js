import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './details-list'

export default {
  title: 'Items & Lists/DetailsList',
  component: 'fluent-details-list',
  argTypes
}

export function Standard (args) {
  const detailsList = document.createElement('FLUENT-DETAILS-LIST')

  detailsList.addEventListener('change', action('change'))

  for (const prop in args) {
    detailsList[prop] = args[prop]
  }

  return detailsList
}
Standard.args = {
  columns: [{ title: 'Name' }, { title: 'Value' }],
  data: Array(20)
    .fill(0)
    .map((_, i) => [`Item ${i}`, i])
}

export const WithGroups = Standard.bind({})
WithGroups.args = {
  collapsible: true,
  columns: [
    { title: 'Name', key: 'name' },
    { title: 'Color', key: 'color' }
  ],
  groups: [
    { name: 'Color: "red"', startIndex: 0, count: 2, level: 0 },
    { name: 'Color: "green"', startIndex: 2, count: 0, level: 0 },
    { name: 'Color: "blue"', startIndex: 2, count: 3, level: 0 }
  ],
  data: [
    { name: 'a', color: 'red' },
    { name: 'b', color: 'red' },
    { name: 'c', color: 'blue' },
    { name: 'd', color: 'blue' },
    { name: 'e', color: 'blue' }
  ]
}

export const WithSubGroups = Standard.bind({})
WithSubGroups.args = {
  collapsible: true,
  columns: [{ title: 'Name' }, { title: 'Value' }],
  groups: Array(100)
    .fill(0)
    .map((_, i) => i * 10)
    .flatMap(i =>
      i % 100 === 0
        ? [
          {
            name: `Hundreds ${i.toString().padStart(3, '0')}`,
            startIndex: i,
            count: 0,
            level: 0
          },
          {
            name: `Tens: ${i.toString().padStart(3, '0')}`,
            startIndex: i,
            count: 10,
            level: 1
          }
        ]
        : [
          {
            name: `Tens: ${i.toString().padStart(3, '0')}`,
            startIndex: i,
            count: 10,
            level: 1
          }
        ]
    ),
  data: Array(1000)
    .fill(0)
    .map((_, i) => [`Item ${i}`, i])
}

export function Alignment (args) {
  const detailsList = Standard(args)

  const alignOptions = ['left', 'center', 'right'].map(option => ({
    text: option,
    value: option
  }))

  const alginmentSetter = columnKey => event => {
    detailsList.columns = detailsList.columns.map(column =>
      column.key === columnKey
        ? { ...column, align: event.detail.value }
        : { ...column }
    )
  }

  const container = document.createElement('DIV')

  const row = document.createElement('DIV')
  row.style.display = 'grid'
  row.style.gridTemplateColumns = '1fr 1fr'

  const dropdownName = document.createElement('FLUENT-DROPDOWN')
  dropdownName.style.margin = '0 5px'
  dropdownName.label = 'Name alignment'
  dropdownName.options = alignOptions
  dropdownName.addEventListener('change', alginmentSetter('name'))

  const dropdownColor = document.createElement('FLUENT-DROPDOWN')
  dropdownColor.style.margin = '0 5px'
  dropdownColor.label = 'Color alignment'
  dropdownColor.options = alignOptions
  dropdownColor.addEventListener('change', alginmentSetter('color'))

  row.appendChild(dropdownName)
  row.appendChild(dropdownColor)

  container.appendChild(row)
  container.appendChild(detailsList)

  return container
}
Alignment.args = { ...WithGroups.args }

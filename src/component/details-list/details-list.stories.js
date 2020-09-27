import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'

function renderDetailsList (args) {
  const detailsList = document.createElement('FLUENT-DETAILS-LIST')

  detailsList.addEventListener('change', action('change'))

  for (const prop in args) {
    detailsList[prop] = args[prop]
  }

  return detailsList
}

const items20 = Array(20)
  .fill(0)
  .map((_, i) => [`Item ${i}`, i])
const items20Columns = [{ title: 'Name' }, { title: 'Value' }]

const colors = [
  { name: 'a', color: 'red' },
  { name: 'b', color: 'red' },
  { name: 'c', color: 'blue' },
  { name: 'd', color: 'blue' },
  { name: 'e', color: 'blue' }
]
const colorsColumns = [
  { title: 'Name', key: 'name' },
  { title: 'Color', key: 'color' }
]
const colorsGroups = [
  { name: 'Color: "red"', startIndex: 0, count: 2, level: 0 },
  { name: 'Color: "green"', startIndex: 2, count: 0, level: 0 },
  { name: 'Color: "blue"', startIndex: 2, count: 3, level: 0 }
]

const items1000 = Array(1000)
  .fill(0)
  .map((_, i) => [`Item ${i}`, i])
const items1000Groups = Array(100)
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
  )

export default {
  title: 'Items & Lists/DetailsList',
  component: 'fluent-details-list',
  argTypes
}

export const Normal = renderDetailsList.bind({})
Normal.args = {
  columns: items20Columns,
  data: items20
}

export const SelectionMultiple = renderDetailsList.bind({})
SelectionMultiple.args = {
  columns: items20Columns,
  data: items20,
  selection: 'multiple'
}

export const SelectionSimple = renderDetailsList.bind({})
SelectionSimple.args = {
  columns: items20Columns,
  data: items20,
  selection: 'simple'
}

export const SelectionSafe = renderDetailsList.bind({})
SelectionSafe.args = {
  columns: items20Columns,
  data: items20,
  selection: 'safe'
}

export const Compact = renderDetailsList.bind({})
Compact.args = {
  columns: items20Columns,
  data: items20,
  compact: true
}

export const CompactWithSelection = renderDetailsList.bind({})
CompactWithSelection.args = {
  columns: items20Columns,
  data: items20,
  selection: 'multiple',
  compact: true
}

export const Grouped = renderDetailsList.bind({})
Grouped.args = {
  columns: colorsColumns,
  data: colors,
  groups: colorsGroups
}

export const GroupedWithLevels = renderDetailsList.bind({})
GroupedWithLevels.args = {
  columns: items20Columns,
  data: items1000,
  groups: items1000Groups,
  compact: true
}

export const GroupedSelectionMultiple = renderDetailsList.bind({})
GroupedSelectionMultiple.args = {
  columns: colorsColumns,
  data: colors,
  groups: colorsGroups,
  selection: 'multiple'
}

export const GroupedCollapsible = renderDetailsList.bind({})
GroupedCollapsible.args = {
  columns: colorsColumns,
  data: colors,
  groups: colorsGroups,
  collapsible: true
}

export const GroupedWithLevelsCollapsible = renderDetailsList.bind({})
GroupedWithLevelsCollapsible.args = {
  columns: items20Columns,
  data: items1000,
  groups: items1000Groups,
  selection: 'multiple',
  collapsible: true
}

export function Alignment (args) {
  const detailsList = renderDetailsList(args)

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
Alignment.args = {
  columns: colorsColumns,
  data: colors,
  groups: colorsGroups,
  selection: 'multiple',
  collapsible: true
}

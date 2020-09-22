import { html } from 'lit-html'
import { withKnobs, boolean, object, select } from '@storybook/addon-knobs'

export default {
  title: 'DetailsList',
  component: 'fluent-details-list',
  decorators: [withKnobs]
}

export const Normal = ({ compact = false, selection = '' } = {}) =>
  html`
    <fluent-details-list
      .columns="${[{ title: 'Name' }, { title: 'Value' }]}"
      .data="${Array(20)
        .fill(0)
        .map((_, i) => [`Item ${i}`, i])}"
      ?compact="${compact}"
      .selection="${selection}"
    ></fluent-details-list>
  `

export const SelectionMultiple = Normal.bind({}, { selection: 'multiple' })

export const SelectionSimple = Normal.bind({}, { selection: 'simple' })

export const SelectionSafe = Normal.bind({}, { selection: 'safe' })

export const Compact = Normal.bind({}, { compact: true })

export const CompactWithSelection = Normal.bind(
  {},
  { compact: true, selection: 'multiple' }
)

export const Grouped = ({
  compact = false,
  selection = '',
  collapsible = false
} = {}) =>
  html`
    <fluent-details-list
      .columns="${[
        { title: 'Name', key: 'name' },
        { title: 'Color', key: 'color' }
      ]}"
      .data="${[
        { name: 'a', color: 'red' },
        { name: 'b', color: 'red' },
        { name: 'c', color: 'blue' },
        { name: 'd', color: 'blue' },
        { name: 'e', color: 'blue' }
      ]}"
      .groups="${[
        { name: 'Color: "red"', startIndex: 0, count: 2, level: 0 },
        { name: 'Color: "green"', startIndex: 2, count: 0, level: 0 },
        { name: 'Color: "blue"', startIndex: 2, count: 3, level: 0 }
      ]}"
      ?compact="${compact}"
      .selection="${selection}"
      ?collapsible="${collapsible}"
    ></fluent-details-list>
  `

export const GroupedWithLevels = ({
  compact = false,
  selection = '',
  collapsible = false
} = {}) =>
  html`
    <fluent-details-list
      collapsible
      .columns="${[
        { title: 'Name', key: 0 },
        { title: 'Value', key: 1 }
      ]}"
      .data="${Array(1000)
        .fill(0)
        .map((_, i) => [`Item ${i}`, i])}"
      .groups="${Array(100)
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
        )}"
      ?compact="${compact}"
      .selection="${selection}"
      ?collapsible="${collapsible}"
    ></fluent-details-list>
  `

export const GroupedSelectionMultiple = Grouped.bind(
  {},
  { selection: 'multiple' }
)

export const GroupedCollapsible = Grouped.bind({}, { collapsible: true })

export const GroupedWithLevelsCollapsible = GroupedWithLevels.bind(
  {},
  {
    selection: 'multiple',
    collapsible: true
  }
)

export const Alignment = () => {
  const alignOptions = ['left', 'center', 'right'].map(option => ({
    text: option,
    value: option
  }))
  const alginmentSetter = columnKey => event => {
    const detailsList = document.getElementById('details-list-alignment')
    detailsList.columns = detailsList.columns.map(column =>
      column.key === columnKey
        ? { ...column, align: event.detail.value }
        : { ...column }
    )
  }
  return html`
    <div style="display: grid; grid-template-columns: 1fr 1fr;">
      <fluent-dropdown
        style="margin: 0 5px;"
        label="Name alignment"
        .options="${alignOptions}"
        @change="${alginmentSetter('name')}"
      ></fluent-dropdown>
      <fluent-dropdown
        style="margin: 0 5px;"
        label="Color alignment"
        .options="${alignOptions}"
        @change="${alginmentSetter('color')}"
      ></fluent-dropdown>
    </div>
    <fluent-details-list
      id="details-list-alignment"
      .columns="${[
        { title: 'Name', key: 'name' },
        { title: 'Color', key: 'color' }
      ]}"
      .data="${[
        { name: 'a', color: 'red' },
        { name: 'b', color: 'red' },
        { name: 'c', color: 'blue' },
        { name: 'd', color: 'blue' },
        { name: 'e', color: 'blue' }
      ]}"
      .groups="${[
        { name: 'Color: "red"', startIndex: 0, count: 2, level: 0 },
        { name: 'Color: "green"', startIndex: 2, count: 0, level: 0 },
        { name: 'Color: "blue"', startIndex: 2, count: 3, level: 0 }
      ]}"
      selection="multiple"
      collapsible
    ></fluent-details-list>
  `
}

export const Sandbox = ({
  compact = false,
  selection = '',
  collapsible = false
} = {}) =>
  html`
    <fluent-button
      text="Selected indices"
      @click="${() => {
        const indices = document.getElementById('details-list-sandbox')
          .selectedIndices
        alert(JSON.stringify(indices))
      }}"
    ></fluent-button>
    <fluent-details-list
      id="details-list-sandbox"
      .columns="${object('columns', [
        { title: 'Name', key: 'name' },
        { title: 'Color', key: 'color' }
      ])}"
      .data="${object('data', [
        { name: 'a', color: 'red' },
        { name: 'b', color: 'red' },
        { name: 'c', color: 'blue' },
        { name: 'd', color: 'blue' },
        { name: 'e', color: 'blue' }
      ])}"
      .groups="${object('groups', [
        { name: 'Color: "red"', startIndex: 0, count: 2, level: 0 },
        { name: 'Color: "green"', startIndex: 2, count: 0, level: 0 },
        { name: 'Color: "blue"', startIndex: 2, count: 3, level: 0 }
      ])}"
      ?auto="${boolean('auto', true)}"
      ?full-auto="${boolean('full-auto', false)}"
      ?compact="${boolean('compact', compact)}"
      .selection="${select(
        'selection',
        ['', 'multiple', 'simple', 'safe'],
        selection
      )}"
      ?collapsible="${boolean('collapsible', collapsible)}"
    ></fluent-details-list>
  `
Sandbox.story = {
  parameters: {
    knobs: {
      timestamps: true,
      escapeHTML: false
    }
  }
}

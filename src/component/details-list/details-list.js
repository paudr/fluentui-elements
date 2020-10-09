import { LitElement, html } from 'lit-element'
import defineStyleSheetProperty from '../../utils/style-sheet-property'
import styles, { expanderWidth } from './details-list.css'
import iconCode from '../icon/code'

function getJustifyContent (align) {
  return `justify-content: ${
    align === 'center'
      ? 'center'
      : align === 'right'
      ? 'flex-end'
      : 'flex-start'
  };`
}

const _privateData = new WeakMap()

class DetailsList extends LitElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      columns: { type: Array },
      data: { type: Array },
      groups: { type: Array },
      selectedIndices: { type: Array },
      auto: { type: Boolean, reflect: true },
      fullAuto: { type: Boolean, reflect: true, attribute: 'full-auto' },
      compact: { type: Boolean, reflect: true },
      selection: { type: String, reflect: true },
      collapsible: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.columns = []
    this.data = []
    this.auto = false
    this.fullAuto = false
    this.compact = false
    this.selection = ''
    this.collapsible = false
    _privateData.set(this, {
      selected: new Set(),
      collapsed: new Set(),
      allCollapsed: false
    })
  }

  get selectedIndices () {
    return [..._privateData.get(this).selected.values()]
  }

  set selectedIndices (value) {
    const { selected } = _privateData.get(this)
    const oldValue = this.selectedIndices
    selected.clear()
    for (const index of value) {
      selected.add(index)
    }
    this.requestUpdate('selectedIndices', oldValue)
  }

  get isCollapsible () {
    return this.collapsible && this.groups && this.groups.length > 0
  }

  getGroupRowIndices (groupIndex) {
    const { count, startIndex } = this.groups[groupIndex]
    return Array(count)
      .fill(startIndex)
      .map((startIndex, index) => startIndex + index)
  }

  getChildGroupIndices (groupIndex) {
    const level = this.groups[groupIndex].level || 0
    let index = groupIndex + 1
    const indices = []
    while (this.groups[index] && this.groups[index].level > level) {
      indices.push(index)
      index += 1
    }
    return indices
  }

  isGroupSelected (groupIndex) {
    const { selected } = _privateData.get(this)
    const childIndices = this.getGroupRowIndices(groupIndex)
    const subChildIndices = this.getChildGroupIndices(
      groupIndex
    ).flatMap(groupIndex => this.getGroupRowIndices(groupIndex))
    const childs = [...childIndices, ...subChildIndices]
    return childs.length > 0 && childs.every(index => selected.has(index))
  }

  toggleSelectedRow (rowIndex) {
    if (this.selection) {
      const oldValue = this.selectedIndices
      const { selected } = _privateData.get(this)

      if (selected.has(rowIndex)) {
        selected.delete(rowIndex)
      } else {
        if (this.selection === 'multiple') {
          selected.add(rowIndex)
        } else if (this.selection === 'simple') {
          selected.clear()
          selected.add(rowIndex)
        } else if (this.selection === 'safe') {
          if (selected.size > 0) return
          selected.add(rowIndex)
        }
      }

      this.requestUpdate()
      const value = this.selectedIndices
      this.dispatchEvent(
        new CustomEvent('change', { detail: { value, oldValue } })
      )
    }
  }

  toggleSelectedGroup (groupIndex) {
    if (this.selection) {
      const oldValue = this.selectedIndices
      const { selected } = _privateData.get(this)
      const group = this.groups[groupIndex]
      const endIndex = group.startIndex + group.count
      const operation = this.isGroupSelected(groupIndex)
        ? index => selected.delete(index)
        : index => selected.add(index)
      for (let index = group.startIndex; index < endIndex; index += 1) {
        operation(index)
      }
      this.getChildGroupIndices(groupIndex)
        .flatMap(groupIndex => this.getGroupRowIndices(groupIndex))
        .forEach(operation)
      this.requestUpdate()
      const value = this.selectedIndices
      this.dispatchEvent(
        new CustomEvent('change', { detail: { value, oldValue } })
      )
    }
  }

  toggleSelectedAll () {
    if (this.selection) {
      const oldValue = this.selectedIndices
      const { selected } = _privateData.get(this)

      if (this.data.length === selected.size) {
        selected.clear()
      } else {
        selected.clear()
        for (let index = 0; index < this.data.length; index++) {
          selected.add(index)
        }
      }

      this.requestUpdate()
      const value = this.selectedIndices
      this.dispatchEvent(
        new CustomEvent('change', { detail: { value, oldValue } })
      )
    }
  }

  toggleExpandedGroup (groupIndex) {
    const { collapsed } = _privateData.get(this)
    if (collapsed.has(groupIndex)) {
      collapsed.delete(groupIndex)
      this.getChildGroupIndices(groupIndex).forEach(index =>
        collapsed.delete(index)
      )
    } else {
      collapsed.add(groupIndex)
      this.getChildGroupIndices(groupIndex).forEach(index =>
        collapsed.add(index)
      )
    }
    this.requestUpdate()
  }

  toggleExpandedAll () {
    const { collapsed } = _privateData.get(this)
    this.allCollapsed = !this.allCollapsed
    if (this.allCollapsed) {
      for (let index = 0; index < this.groups.length; index += 1) {
        collapsed.add(index)
      }
    } else {
      collapsed.clear()
    }
    this.requestUpdate()
  }

  renderCheckbox ({ empty = false, click = null } = {}) {
    return html`
      <td class="checkCell">
        ${empty
          ? undefined
          : html`
              <div @click="${click}">
                <div>
                  <i>${iconCode.CircleRing}</i>
                  <i>${iconCode.StatusCircleCheckmark}</i>
                </div>
              </div>
            `}
      </td>
    `
  }

  renderExpander ({ click, expanded = false } = {}) {
    return this.groups && this.groups.length > 0 && this.collapsible
      ? html`
          <div class="expander ${expanded ? 'expanded' : ''}" @click="${click}">
            <i>${iconCode.ChevronRightMed}</i>
          </div>
        `
      : undefined
  }

  renderData ({ startIndex = 0, count = this.data.length } = {}) {
    const { selected } = _privateData.get(this)
    return html`
      <tbody>
        ${this.data.slice(startIndex, startIndex + count).map(
          (row, index) => html`
            <tr
              data-row-index="${index}"
              class="${selected.has(index + startIndex) ? 'selected' : ''}"
              @click="${event => {
                event.preventDefault()
                event.stopPropagation()
                this.toggleSelectedRow(index + startIndex)
              }}"
            >
              ${this.selection ? this.renderCheckbox() : undefined}
              ${this.isCollapsible
                ? html`<td class="expanderCell"></td>`
                : undefined}
              ${this.columns.map((column, index) => {
                const key = column.key == null ? index : column.key
                return html`<td data-column-key="${key}">
                  <div style="${getJustifyContent(column.align)}">
                    ${row[key]}
                  </div>
                </td>`
              })}
            </tr>
          `
        )}
      </tbody>
    `
  }

  renderGroups () {
    const { collapsed } = _privateData.get(this)
    return this.groups.map((group, index) => {
      const expanded = !collapsed.has(index)
      const click = event => {
        event.preventDefault()
        event.stopPropagation()
        this.toggleExpandedGroup(index)
      }
      const groupTitleCollapsed =
        !this.isCollapsible || expanded ? '' : 'collapsed'
      return html`
        <thead class="group">
          <tr class="${this.isGroupSelected(index) ? 'selected' : ''}">
            ${this.selection
              ? this.renderCheckbox({
                  empty: this.selection !== 'multiple',
                  click: event => {
                    event.preventDefault()
                    event.stopPropagation()
                    this.toggleSelectedGroup(index)
                  }
                })
              : undefined}
            <th
              style="padding-left: ${(group.level || 0) * expanderWidth}px"
              colspan="${this.columns.length + (this.isCollapsible ? 1 : 0)}"
            >
              <div class="groupWrapper">
                ${this.renderExpander({ click, expanded })}
                <div class="title ${groupTitleCollapsed}">${group.name}</div>
              </div>
            </th>
          </tr>
        </thead>
        ${expanded ? this.renderData(group) : undefined}
      `
    })
  }

  render () {
    const { selected } = _privateData.get(this)
    return html`
      <table>
        <thead id="header">
          <tr class="${this.data.length === selected.size ? 'selected' : ''}">
            ${this.selection
              ? this.renderCheckbox({
                  empty: this.selection !== 'multiple',
                  click: event => {
                    event.stopPropagation()
                    event.preventDefault()
                    this.toggleSelectedAll()
                  }
                })
              : undefined}
            ${this.isCollapsible
              ? html`<td class="expanderCell">
                  ${this.renderExpander({
                    expanded: !this.allCollapsed,
                    click: event => {
                      event.stopPropagation()
                      event.preventDefault()
                      this.toggleExpandedAll()
                    }
                  })}
                </td>`
              : undefined}
            ${this.columns.map(
              column => html`
                <th style="${column.width ? `width: ${column.width}` : ''}">
                  <div class="title" style="${getJustifyContent(column.align)}">
                    ${column.title}
                  </div>
                </th>
              `
            )}
          </tr>
        </thead>
        ${this.groups && this.groups.length > 0
          ? this.renderGroups()
          : this.renderData()}
      </table>
    `
  }
}

defineStyleSheetProperty(DetailsList)

customElements.define('fluent-details-list', DetailsList)

export default DetailsList

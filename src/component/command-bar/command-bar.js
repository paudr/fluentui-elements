import { LitElement, html } from 'lit-element'
import { nothing } from 'lit-html'
import defineStyleSheetProperty from '../../utils/style-sheet-property'
import debounce from '../../utils/debounce'
import styles from './command-bar.css'
import iconCode from '../icon/code'

function arrayTransfer (source, target, index) {
  if (Number.isInteger(index) && index >= 0 && index < source.length) {
    return [source.slice(0, index), source.slice(index).concat(target)]
  } else {
    return [Array.from(source), Array.from(target)]
  }
}

function getItems ({ items, overflowItems, overflowedItemsIndex }) {
  const [newItems, newOverflowItems] = arrayTransfer(
    items,
    overflowItems,
    overflowedItemsIndex
  )
  if (newOverflowItems.length > 0) {
    newItems.push({
      value: more,
      icon: 'More',
      iconColor: 'var(--neutral-primary)',
      childs: newOverflowItems
    })
  }
  return newItems
}

function copyItem (item) {
  return {
    value: item.value,
    text: item.text,
    icon: item.icon,
    iconColor: item.iconColor,
    action: item.action,
    childs: Array.isArray(item.childs) ? item.childs.map(copyItem) : undefined
  }
}

const _privateData = new WeakMap()
const more = Symbol('more')

class CommandBar extends LitElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      items: { type: Array },
      overflowItems: { type: Array },
      farItems: { type: Array },
      autoUpdateOverflowIndex: { type: Boolean },
      onResizeRate: { type: Number }
    }
  }

  constructor () {
    super()
    this.autoUpdateOverflowIndex = false
    this.onResizeRate = 250
    _privateData.set(this, {
      items: [],
      overflowItems: [],
      farItems: [],
      open: [],
      overflowedItemsIndex: -1,
      itemWidths: [],
      resizeObserver: new ResizeObserver(
        debounce(entries => this.updateOverflowIndex()),
        this.onResizeRate
      )
    })
  }

  get items () {
    return _privateData.get(this).items.map(copyItem)
  }

  set items (value) {
    const data = _privateData.get(this)
    const oldValue = data.items
    data.items = value.map(copyItem)
    data.overflowedItemsIndex = -1
    this.requestUpdate('items', oldValue)
  }

  get overflowItems () {
    return _privateData.get(this).overflowItems.map(copyItem)
  }

  set overflowItems (value) {
    const data = _privateData.get(this)
    const oldValue = data.overflowItems
    data.overflowItems = value.map(copyItem)
    data.overflowedItemsIndex = -1
    this.requestUpdate('overflowItems', oldValue)
  }

  get farItems () {
    return _privateData.get(this).farItems.map(copyItem)
  }

  set farItems (value) {
    const data = _privateData.get(this)
    const oldValue = data.farItems
    data.farItems = value.map(copyItem)
    data.overflowedItemsIndex = -1
    this.requestUpdate('farItems', oldValue)
  }

  get overflowedItemsIndex () {
    return _privateData.get(this).overflowedItemsIndex
  }

  expandLevel (key, level, noClose) {
    const { open } = _privateData.get(this)
    if (open[level] === key) {
      if (!noClose) {
        open.splice(level)
      }
    } else {
      open.splice(level)
      open.push(key)
    }
    this.requestUpdate()
  }

  updateOverflowIndex () {
    const root = this.renderRoot.getElementById('root')
    const farOptions = this.renderRoot.querySelector('#root > div:last-child')
    const moreButton = this.renderRoot.querySelector(
      '#root > div:first-child > div[data-type="more"]'
    )
    const farOptionsWidth = farOptions
      ? farOptions.getBoundingClientRect().width
      : 0
    const moreButtonWidth = moreButton
      ? moreButton.getBoundingClientRect().width
      : 40
    const maxWidth =
      root.getBoundingClientRect().width -
      farOptionsWidth -
      moreButtonWidth -
      38 // padding
    const data = _privateData.get(this)
    let index = data.itemWidths.length - 1
    for (; index >= 0; index--) {
      if (data.itemWidths[index] < maxWidth) break
    }
    const newIndex = index + 1
    if (data.overflowedItemsIndex !== newIndex) {
      data.overflowedItemsIndex = newIndex
      this.requestUpdate()
    }
  }

  updated (changedProperties) {
    const data = _privateData.get(this)

    if (changedProperties.has('autoUpdateOverflowIndex')) {
      const root = this.renderRoot.getElementById('root')
      if (this.autoUpdateOverflowIndex) {
        data.resizeObserver.observe(root)
      } else {
        data.resizeObserver.unobserve(root)
      }
    }

    if (
      changedProperties.has('items') ||
      changedProperties.has('overflowItems') ||
      changedProperties.has('farItems')
    ) {
      const options = this.renderRoot.querySelectorAll(
        '#root > div:first-child > div.commandItem[data-type="option"]'
      )
      let width = 0
      data.itemWidths = []
      for (const option of options) {
        width += option.getBoundingClientRect().width
        data.itemWidths.push(width)
      }
      if (this.autoUpdateOverflowIndex) {
        this.updateOverflowIndex()
      }
    }
  }

  renderCommandButton ({
    icon,
    text,
    expandIcon,
    emptyIcon,
    iconColor,
    action,
    mouseTrigger
  }) {
    let mouseHandler = null
    const mouseover = () => {
      if (!mouseHandler) {
        mouseHandler = setTimeout(() => {
          mouseTrigger.call()
        }, 800)
      }
    }
    const mouseout = () => {
      if (mouseHandler) {
        clearTimeout(mouseHandler)
        mouseHandler = null
      }
    }
    const click = () => {
      if (mouseHandler) {
        clearTimeout(mouseHandler)
        mouseHandler = null
      }
      if (action) {
        action.call()
      }
    }
    const controllWithMouse = mouseTrigger && action
    return html`
      <button
        class="commandButton"
        @click="${click}"
        @mouseover="${controllWithMouse ? mouseover : null}"
        @mouseout="${controllWithMouse ? mouseout : null}"
      >
        <span>
          ${icon
            ? html`<i
                class="icon"
                .style="${iconColor ? `color: ${iconColor};` : ''}"
              >
                ${iconCode[icon]}
              </i>`
            : nothing}
          ${!icon && emptyIcon ? html`<i class="empty"></i>` : nothing}
          ${text
            ? html`<span class="text">
                <span> ${text} </span>
              </span>`
            : nothing}
          ${expandIcon
            ? html`<i class="expand">${iconCode[expandIcon]}</i>`
            : nothing}
        </span>
      </button>
    `
  }

  renderSplitButton ({
    icon,
    text,
    expandIcon,
    emptyIcon,
    iconColor,
    action,
    expand,
    mouseTrigger
  }) {
    return html`
      <div class="splitButton">
        <span style="display: flex;">
          ${this.renderCommandButton({
            icon,
            text,
            emptyIcon,
            iconColor,
            action
          })}
          ${this.renderCommandButton({
            expandIcon,
            action: expand,
            mouseTrigger
          })}
          <span class="divisor"></span>
        </span>
      </div>
    `
  }

  renderCommandItem (item) {
    const hasChilds = Array.isArray(item.childs) && item.childs.length > 0
    const hasAction = typeof item.action === 'function'
    const expandIcon = hasChilds ? 'ChevronDown' : null
    const data = _privateData.get(this)
    const showChilds = data.open[0] === item.value
    const action = () => {
      data.open = []
      this.requestUpdate()
      hasAction && item.action.call(null, item.value)
    }
    const expand = () => this.expandLevel(item.value, 0)
    const mouseTrigger = () => this.expandLevel(item.value, 0, true)
    const dataType = item.value === more ? 'more' : 'option'

    return html`
      <div class="commandItem" data-type="${dataType}">
        ${hasChilds && hasAction
          ? this.renderSplitButton({
              icon: item.icon,
              text: item.text,
              expandIcon,
              iconColor: item.iconColor,
              action,
              expand,
              mouseTrigger
            })
          : this.renderCommandButton({
              icon: item.icon,
              text: item.text,
              expandIcon:
                !hasAction && !item.text && item.icon ? null : expandIcon,
              iconColor: item.iconColor,
              action: hasChilds ? expand : action,
              mouseTrigger
            })}
        ${hasChilds && showChilds
          ? this.renderContextualPanel(item.childs, 1)
          : nothing}
      </div>
    `
  }

  renderContextualItem (item, { level, emptyIcon }) {
    const hasChilds = Array.isArray(item.childs) && item.childs.length > 0
    const hasAction = typeof item.action === 'function'
    const expandIcon = hasChilds ? 'ChevronRight' : null
    const data = _privateData.get(this)
    const showChilds = data.open[level] === item.value
    const action = () => {
      data.open = []
      this.requestUpdate()
      hasAction && item.action.call(null, item.value)
    }
    const expand = () => this.expandLevel(item.value, level)
    const mouseTrigger = () => this.expandLevel(item.value, level, true)

    return html`
      <li class="commandItem">
        ${hasChilds && hasAction
          ? this.renderSplitButton({
              icon: item.icon,
              text: item.text,
              expandIcon,
              emptyIcon,
              iconColor: item.iconColor,
              action,
              expand,
              mouseTrigger
            })
          : this.renderCommandButton({
              icon: item.icon,
              text: item.text,
              expandIcon,
              emptyIcon,
              iconColor: item.iconColor,
              action: hasChilds ? expand : action,
              mouseTrigger
            })}
        ${hasChilds && showChilds
          ? this.renderContextualPanel(item.childs, level + 1)
          : nothing}
      </li>
    `
  }

  renderDivider () {
    return html`<li class="divider"></li>`
  }

  renderTitle (text) {
    return html`<li>
      <div class="contextTitle">
        <div>
          <i class="empty"></i>
          <span>${text}</span>
        </div>
      </div>
    </li>`
  }

  renderContextualPanel (items, level) {
    const emptyIcon = items.some(item => item.icon)
    return html`
      <div class="${level === 1 ? 'contextualPanel' : 'contextualPanel right'}">
        <ul>
          ${items.map(item => {
            switch (item.type) {
              case 'divider':
                return this.renderDivider()
              case 'title':
                return this.renderTitle(item.text)
              default:
                return this.renderContextualItem(item, { level, emptyIcon })
            }
          })}
        </ul>
      </div>
    `
  }

  render () {
    const data = _privateData.get(this)
    return html`
      <div id="root">
        <div>${getItems(data).map(item => this.renderCommandItem(item))}</div>
        <div>${data.farItems.map(item => this.renderCommandItem(item))}</div>
      </div>
    `
  }
}

defineStyleSheetProperty(CommandBar)

customElements.define('fluent-command-bar', CommandBar)

export default CommandBar

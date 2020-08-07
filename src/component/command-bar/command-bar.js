import { html, nothing } from 'lit-html'
import StyledElement from '../../base/styled-element'
import styles from './command-bar.css'
import iconCode from '../icon/code'

function arrayTransfer (source, target, index) {
  if (Number.isInteger(index) && index >= 0 && index < source.length) {
    return [source.slice(0, index), source.slice(index).concat(target)]
  } else {
    return [Array.from(source), Array.from(target)]
  }
}

const _event = new WeakMap()
const _open = new WeakMap()
const more = Symbol('more')

class CommandBar extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      items: { type: Array },
      overflowItems: { type: Array },
      farItems: { type: Array },
      overflowedItemsIndex: { type: Number },
      autoUpdateOverflowedItemsIndex: { type: Boolean }
    }
  }

  constructor () {
    super()
    this.items = []
    this.overflowItems = []
    this.farItems = []
    this.overflowedItemsIndex = -1
    _open.set(this, [])
  }

  onResize () {
    if (this.autoUpdateOverflowedItemsIndex) {
      this.overflowedItemsIndex = -1
      setImmediate(() => {
        this.overflowedItemsIndex = this.getOverflowItemIndex()
      })
    }
  }

  getOverflowItemIndex () {
    const root = this.renderRoot.getElementById('root')
    const farOptions = this.renderRoot.querySelector('#root > div:last-child')
    const options = [
      ...this.renderRoot.querySelectorAll(
        '#root > div:first-child > div.commandItem'
      )
    ].filter(option => option.getAttribute('data-type') !== 'more')
    const moreButton = this.renderRoot.querySelector(
      '#root > div:first-child > div[data-type="more"]'
    )
    const maxWidth =
      root.getBoundingClientRect().width -
      farOptions.getBoundingClientRect().width -
      moreButton.getBoundingClientRect().width -
      20
    let currentWidth = 0
    for (let index = 0; index < options.length; index += 1) {
      currentWidth += options[index].getBoundingClientRect().width
      if (currentWidth > maxWidth) return index
    }
    return -1
  }

  expandLevel (key, level, noClose) {
    const open = _open.get(this)
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

  getItems () {
    const [items, overflowItems] = arrayTransfer(
      this.items,
      this.overflowItems,
      this.overflowedItemsIndex
    )
    if (overflowItems.length > 0) {
      items.push({
        value: more,
        icon: 'More',
        iconColor: '#333333',
        childs: overflowItems
      })
    }
    return items
  }

  connectedCallback () {
    super.connectedCallback()
    const event = () => {
      this.onResize()
    }
    _event.set(this, event)
    window.addEventListener('resize', event)
  }

  disconnectedCallback () {
    super.disconnectedCallback()
    window.removeEventListener('resize', _event.get(this))
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
                .style="${iconColor ? `color: ${iconColor}` : ''}"
              >
                ${iconCode[icon]}
              </i>`
            : nothing}
          ${!icon && emptyIcon ? html`<i class="empty"></i>` : nothing}
          ${text
            ? html`<span class="text">
                <span>
                  ${text}
                </span>
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
    const showChilds = _open.get(this)[0] === item.value
    const action = () => {
      _open.set(this, [])
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
    const showChilds = _open.get(this)[level] === item.value
    const action = () => {
      _open.set(this, [])
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
    return html`
      <div id="root">
        <div>
          ${this.getItems().map(item => this.renderCommandItem(item))}
        </div>
        <div>
          ${this.farItems.map(item => this.renderCommandItem(item))}
        </div>
      </div>
    `
  }
}

customElements.define('fluent-command-bar', CommandBar)

export default CommandBar

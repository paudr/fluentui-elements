import { html, nothing } from 'lit-html'
import StyledElement from '../../utils/styled-element'
import styles from './command-bar.css'
import iconCode from '../icon/code'

function arrayTransfer (source, target, index) {
  if (Number.isInteger(index) && index >= 0 && index < source.length) {
    return [source.slice(0, index), source.slice(index).concat(target)]
  } else {
    return [Array.from(source), Array.from(target)]
  }
}

const $open = new WeakMap()

class CommandBar extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      items: { type: Array },
      overflowItems: { type: Array },
      farItems: { type: Array },
      overflowedItemsIndex: { type: Number }
    }
  }

  constructor () {
    super()
    this.items = []
    this.overflowItems = []
    this.farItems = []
    this.overflowedItemsIndex = -1
    $open.set(this, [])
  }

  expandLevel (key, level, noClose) {
    const open = $open.get(this)
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
        value: 'more',
        icon: 'More',
        iconColor: '#333333',
        childs: overflowItems
      })
    }
    return items
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
    const showChilds = $open.get(this)[0] === item.value
    const action = () => {
      $open.set(this, [])
      this.requestUpdate()
      hasAction && item.action.call(null, item.value)
    }
    const expand = () => this.expandLevel(item.value, 0)
    const mouseTrigger = () => this.expandLevel(item.value, 0, true)

    return html`
      <div class="commandItem">
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
    const showChilds = $open.get(this)[level] === item.value
    const action = () => {
      $open.set(this, [])
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

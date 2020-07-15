import { html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { styleMap } from 'lit-html/directives/style-map'
import StyledElement from '../../utils/styled-element'
import styles from './select.css'
import OptionsManager from '../../utils/options-manager'
import iconCode from '../icon/code'

const _optionsManager = new WeakMap()

class Select extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      options: { type: Array },
      value: { type: Object, reflect: true },
      multiple: { type: Boolean, reflect: true },
      maxHeight: { type: String, reflect: true },
      highlightedIndex: { type: Number, reflect: true }
    }
  }

  constructor () {
    super()
    this.highlightedIndex = -1
    _optionsManager.set(this, new OptionsManager())
  }

  get options () {
    return _optionsManager.get(this).options
  }

  set options (value) {
    const optionsManager = _optionsManager.get(this)
    const oldValue = optionsManager.options
    optionsManager.options = value
    this.requestUpdate('options', oldValue)
  }

  get value () {
    return _optionsManager.get(this).value
  }

  set value (value) {
    const optionsManager = _optionsManager.get(this)
    const oldValue = optionsManager.value
    optionsManager.value = value
    this.requestUpdate('value', oldValue)
  }

  get multiple () {
    return _optionsManager.get(this).multiple
  }

  set multiple (value) {
    const optionsManager = _optionsManager.get(this)
    const oldValue = optionsManager.multiple
    optionsManager.multiple = value
    this.requestUpdate('multiple', oldValue)
  }

  get selectedIndices () {
    return Array.from(_optionsManager.get(this).selectedIndices)
  }

  isIndexSelected (index) {
    return _optionsManager.get(this).isIndexSelected(index)
  }

  selectIndex (index, emitEvent = false) {
    const optionsManager = _optionsManager.get(this)
    const oldValue = optionsManager.value
    const oldSelectedIndices = optionsManager.selectedIndices
    optionsManager.selectedIndices = [index]
    if (emitEvent) {
      const value = optionsManager.value
      const selectedIndices = Array.from(optionsManager.selectedIndices)
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            value,
            oldValue,
            selectedIndices,
            oldSelectedIndices
          }
        })
      )
    }
    this.requestUpdate()
  }

  toggleIndex (index, emitEvent = false) {
    const optionsManager = _optionsManager.get(this)
    const oldValue = optionsManager.value
    const oldSelectedIndices = optionsManager.selectedIndices
    optionsManager.toggleIndex(index)
    if (emitEvent) {
      const value = optionsManager.value
      const selectedIndices = Array.from(optionsManager.selectedIndices)
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            value,
            oldValue,
            selectedIndices,
            oldSelectedIndices
          }
        })
      )
    }
    this.requestUpdate()
  }

  getNextHighlightedIndex (backward = false) {
    const { options, selectedIndices, multiple } = _optionsManager.get(this)
    const increment = backward ? -1 : 1
    let index = this.highlightedIndex
    if (!options[index] && !multiple) {
      index = selectedIndices[0] || -1
    }
    do {
      index += increment
      if (index >= options.length) index = 0
      if (index < 0) index = options.length - 1
    } while (
      !options[index] ||
      options[index].type === 'header' ||
      options[index].type === 'divider' ||
      options[index].disabled
    )
    return index
  }

  highlightNextOption (backward) {
    const oldValue = this.highlightedIndex
    this.highlightedIndex = this.getNextHighlightedIndex(backward)
    this.requestUpdate('highlightedIndex', oldValue)
  }

  scrollToElement (index) {
    const parent = this.shadowRoot.getElementById('root')
    const element = this.shadowRoot.querySelector(`*[data-index="${index}"]`)
    if (parent && element) {
      const parentBottom = parent.scrollTop
      const parentTop = parentBottom + parent.getBoundingClientRect().height
      const elementBottom = element.offsetTop
      const elementTop = elementBottom + element.getBoundingClientRect().height
      if (parentBottom > elementBottom) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      } else if (parentTop < elementTop) {
        element.scrollIntoView({ block: 'end', behavior: 'smooth' })
      }
    }
  }

  handleKeydown (event) {
    const { code } = event
    event.stopPropagation()
    event.preventDefault()
    if (code === 'ArrowDown') {
      this.highlightNextOption()
      setImmediate(() => this.scrollToElement(this.highlightedIndex))
    } else if (code === 'ArrowUp') {
      this.highlightNextOption(true)
      setImmediate(() => this.scrollToElement(this.highlightedIndex))
    } else if (code === 'Space') {
      if (this.multiple) {
        this.toggleIndex(this.highlightedIndex, true)
      } else {
        this.selectIndex(this.highlightedIndex, true)
      }
    }
  }

  renderButton (option, index) {
    const selected = this.isIndexSelected(index)
    const { disabled } = option
    const highlighted = !disabled && index === this.highlightedIndex
    return html`
      <button
        class="${classMap({
          option: true,
          selected,
          highlighted,
          disabled
        })}"
        data-index="${index}"
        @click="${() =>
          !disabled && !selected && this.selectIndex(index, true)}"
      >
        ${option.text}
      </button>
    `
  }

  renderCheckbox (option, index) {
    const selected = this.isIndexSelected(index)
    const { disabled } = option
    const highlighted = !disabled && index === this.highlightedIndex
    return html`
      <div
        class="${classMap({
          option: true,
          checkbox: true,
          selected,
          highlighted,
          disabled
        })}"
        data-index="${index}"
        @click="${() => !disabled && this.toggleIndex(index, true)}"
      >
      <label>
        <div>
          <i>${iconCode.CheckMark}</i>
        </div>
        <span>${option.text}</span>
      </label>
      </button>
    `
  }

  renderHeader (option, index) {
    return html`
      <div class="header" data-index="${index}">
        <span>${option.text}</span>
      </div>
    `
  }

  renderDivider () {
    return html`<div class="divider"></div>`
  }

  renderOption (option, index) {
    if (option.type === 'header') {
      return this.renderHeader(option, index)
    } else if (option.type === 'divider') {
      return this.renderDivider()
    } else {
      return this.multiple
        ? this.renderCheckbox(option, index)
        : this.renderButton(option, index)
    }
  }

  render () {
    return html`<div
      id="root"
      style="${styleMap({ maxHeight: this.maxHeight })}"
      tabindex="${this.disabled ? '' : '0'}"
      @keydown="${this.handleKeydown}"
    >
      ${this.options.map((option, index) => this.renderOption(option, index))}
    </div>`
  }
}

customElements.define('fluent-select', Select)

export default Select

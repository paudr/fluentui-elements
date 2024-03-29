import { html } from 'lit-html'
import ComboElement from '../../part/combo-element'
import OptionsManager from '../../utils/options-manager'
import { equalInsensitive } from '../../utils/text'
import '../select'
import styles from './dropdown.css'
import iconCode from '../icon/code'

const _optionsManager = new WeakMap()

class Dropdown extends ComboElement {
  static get styles () {
    return [ComboElement.styles, styles]
  }

  static get properties () {
    return {
      ...ComboElement.properties,
      options: { type: Array },
      value: { type: Object, reflect: true },
      placeholder: { type: String, reflect: true },
      readonly: { type: Boolean, reflect: true },
      multiple: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.placeholder = ''
    this.readonly = false
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

  get selectedText () {
    return _optionsManager.get(this).getSelectedText(this.placeholder)
  }

  labelClick (event) {
    event.stopPropagation()
    this.renderRoot.getElementById('container').focus()
  }

  handleContainerClick (event) {
    event.stopPropagation()
    if (!this.disabled && !this.readonly) {
      this.open = !this.open
    }
  }

  handleSelectChange (event) {
    event.stopPropagation()
    const { detail } = event
    const optionsManager = _optionsManager.get(this)
    optionsManager.selectedIndices = Array.from(detail.selectedIndices)
    this.dispatchEvent(new CustomEvent('change', { detail }))
    if (!this.multiple) {
      this.open = false
    }
    this.requestUpdate()
  }

  handleKeydown (event) {
    const { code } = event
    event.stopPropagation()
    event.preventDefault()
    const select = this.renderRoot.querySelector('fluent-select')
    if (this.open) {
      if (select) {
        if (['ArrowDown', 'ArrowUp', 'Space'].includes(code)) {
          select.handleKeydown(event)
        } else if (code === 'Enter') {
          if (select.multiple) {
            select.toggleIndex(select.markedIndex, true)
          } else {
            select.selectIndex(select.markedIndex, true)
            this.open = false
          }
        } else if (code.startsWith('Key')) {
          const index = select.options.findIndex(
            option =>
              option.text && equalInsensitive(option.text[0], event.key, true)
          )
          if (index >= 0) {
            select.markedIndex = index
            select.scrollToElement(index)
          }
        }
      }
    } else if (code === 'Enter') {
      this.open = true
      this.requestUpdate()
    }
  }

  renderInputField () {
    return html`
      <div
        id="container"
        tabindex="${this.disabled ? '' : '0'}"
        @click="${this.handleContainerClick}"
        @keydown="${this.handleKeydown}"
      >
        <span id="title">${this.selectedText}</span>
        <span id="caret">
          <i>${iconCode.ChevronDown}</i>
        </span>
      </div>
    `
  }

  renderDropdown () {
    return html`
      <fluent-select
        .options="${this.options}"
        .multiple="${this.multiple}"
        .value="${this.value}"
        maxHeight="200px"
        @change="${this.handleSelectChange}"
      ></fluent-select>
    `
  }
}

customElements.define('fluent-dropdown', Dropdown)

export default Dropdown

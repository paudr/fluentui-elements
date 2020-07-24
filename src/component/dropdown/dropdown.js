import { html, nothing } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import StyledElement from '../../utils/styled-element'
import OptionsManager from '../../utils/options-manager'
import { compareInsensitive } from '../../utils/text'
import '../select'
import styles from './dropdown.css'
import iconCode from '../icon/code'

const _optionsManager = new WeakMap()

class Dropdown extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      options: { type: Array },
      value: { type: Object, reflect: true },
      label: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
      readonly: { type: Boolean, reflect: true },
      multiple: { type: Boolean, reflect: true },
      errorMessage: { type: String, reflect: true },
      open: { type: Boolean }
    }
  }

  constructor () {
    super()

    this.label = ''
    this.placeholder = ''
    this.disabled = false
    this.required = false
    this.readonly = false
    this.errorMessage = ''
    this.open = false
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
    const optionsManager = _optionsManager.get(this)
    const selectedIndices = optionsManager.multiple
      ? optionsManager.selectedIndices
      : optionsManager.selectedIndices.slice(0, 1)
    return selectedIndices.length === 0
      ? this.placeholder
      : selectedIndices
        .filter(index => index in this.options)
        .map(index => this.options[index].text)
        .join(', ')
  }

  handleLabelClick (event) {
    event.stopPropagation()
    this.shadowRoot.getElementById('container').focus()
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
    this.requestUpdate()
  }

  handleKeydown (event) {
    const { code } = event
    event.stopPropagation()
    event.preventDefault()
    const select = this.shadowRoot.querySelector('fluent-select')
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
              option.text && compareInsensitive(option.text[0], event.key, true)
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

  render () {
    return html`
      <div>
        ${this.label
          ? html`<label @click="${this.handleLabelClick}">${this.label}</label>`
          : nothing}
        <div
          id="container"
          class="${classMap({
            invalid: this.errorMessage,
            open: this.open && !this.disabled
          })}"
          tabindex="${this.disabled ? '' : '0'}"
          @click="${this.handleContainerClick}"
          @keydown="${this.handleKeydown}"
        >
          <span id="title">${this.selectedText}</span>
          <span id="caret">
            <i>${iconCode.ChevronDown}</i>
          </span>
          <div id="items">
            <fluent-select
              .options="${this.options}"
              .multiple="${this.multiple}"
              .value="${this.value}"
              maxHeight="200px"
              @change="${this.handleSelectChange}"
            ></fluent-select>
          </div>
          ${this.errorMessage
            ? html`
                <div id="errorMessage" class="slideDownIn20">
                  ${this.errorMessage}
                </div>
              `
            : nothing}
        </div>
      </div>
    `
  }
}

customElements.define('fluent-dropdown', Dropdown)

export default Dropdown

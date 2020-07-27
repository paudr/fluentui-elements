import { html, nothing } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import StyledElement from '../../utils/styled-element'
import OptionsManager from '../../utils/options-manager'
import { startsWith, equalInsensitive } from '../../utils/text'
import styles from './combo-box.css'
import iconCode from '../icon/code'
import '../autofill'
import '../select'

const _optionsManager = new WeakMap()

class ComboBox extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      options: { type: Array, reflect: true },
      value: { type: Object, reflect: true },
      label: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
      readOnly: { type: Boolean, reflect: true },
      multiple: { type: Boolean, reflect: true },
      allowFreeform: { type: Boolean, reflect: true },
      autoComplete: { type: Boolean, reflect: true },
      accentInsensitive: { type: Boolean, reflect: true },
      placeholder: { type: String, reflect: true },
      errorMessage: { type: String, reflect: true },
      open: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.label = ''
    this.disabled = false
    this.required = false
    this.readOnly = false
    this.allowFreeform = false
    this.autoComplete = false
    this.accentInsensitive = false
    this.placeholder = ''
    this.errorMessage = ''
    this.open = false
    this.selectedIndex = null
    this.suggestedIndex = null
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
    this.shadowRoot.querySelector('fluent-autofill').focus()
  }

  handleCaretClick () {}

  handleSelectChange (event) { }

  handleAutofillInput (event) { }

  handleAutofillNavigate (event) {}

  handleAutofillSelect (event) {}

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
        >
          <div id="wrapper">
            <div id="title">
              <fluent-autofill
                autofill
                .value="${this.multiple ? '' : (this.value || {})[0] || ''}"
                .disabled="${this.disabled}"
                .readOnly="${this.readOnly}"
                .accentInsensitive="${this.accentInsensitive}"
                @input="${this.handleAutofillInput}"
                @navigate="${this.handleAutofillNavigate}"
                @select="${this.handleAutofillSelect}"
              ></fluent-autofill>
            </div>
            <button id="caret" @click="${this.handleCaretClick}">
              <span>
                <i>${iconCode.ChevronDown}</i>
              </span>
            </button>
          </div>
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

customElements.define('fluent-combo-box', ComboBox)

export default ComboBox

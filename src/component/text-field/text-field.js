import { html, nothing } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import { live } from 'lit-html/directives/live'
import StyledElement from '../../utils/styled-element'
import styles from './text-field.css'
import iconCode from '../icon/code'

const _privateData = new WeakMap()

class TextField extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      label: { type: String, reflect: true },
      description: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      prefix: { type: String, reflect: true },
      sufix: { type: String, reflect: true },
      multiline: { type: Boolean, reflect: true },
      underlined: { type: Boolean, reflect: true },
      borderless: { type: Boolean, reflect: true },
      icon: { type: String, reflect: true },
      errorMessage: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
      readonly: { type: Boolean, reflect: true },
      maxlength: { type: Number, reflect: true },
      unresizable: { type: Boolean, reflect: true },
      autoAdjustHeight: { type: Boolean, reflect: true },
      value: { type: String, reflect: true }
    }
  }

  constructor () {
    super()

    this.label = ''
    this.description = ''
    this.placeholder = ''
    this.prefix = ''
    this.sufix = ''
    this.multiline = false
    this.underlined = false
    this.borderless = false
    this.icon = ''
    this.errorMessage = ''
    this.disabled = false
    this.required = false
    this.readonly = false
    this.unresizable = false
    this.autoAdjustHeight = false

    _privateData.set(this, {
      value: '',
      oldValue: ''
    })
  }

  get value () {
    return _privateData.get(this).value
  }

  set value (value) {
    const data = _privateData.get(this)
    data.value = value
    data.oldValue = value
    const field = this.shadowRoot.querySelector('.field')
    if (field) {
      field.value = value
    }
  }

  handleInput (event) {
    event.stopPropagation()
    event.preventDefault()
    const data = _privateData.get(this)
    const oldValue = data.value
    const value = event.target.value
    data.value = value
    this.adjustInputHeight()
    this.dispatchEvent(
      new CustomEvent('input', { detail: { value, oldValue } })
    )
  }

  handleChange (event) {
    event.stopPropagation()
    event.preventDefault()
    const data = _privateData.get(this)
    const oldValue = data.oldValue
    const value = event.target.value
    data.oldValue = value
    this.dispatchEvent(
      new CustomEvent('change', { detail: { value, oldValue } })
    )
  }

  handleClick (event) {
    event.stopPropagation()
    this.dispatchEvent(new CustomEvent('click:icon'))
  }

  adjustInputHeight () {
    if (this.multiline && this.autoAdjustHeight) {
      const field = this.shadowRoot.querySelector('textarea')
      if (field) {
        field.style.height = ''
        const scrollHeight = field.scrollHeight + 2 // +2 to avoid vertical scroll bars
        field.style.height = scrollHeight + 'px'
      }
    }
  }

  renderInput () {
    return html`
      <input
        id="field"
        type="text"
        class="${classMap({ hasIcon: this.icon })}"
        .value="${live(this.value)}"
        .placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        maxlength="${this.maxlength}"
        @input="${this.handleInput}"
        @change="${this.handleChange}"
      />
    `
  }

  renderTextarea () {
    return html`
      <textarea
        id="field"
        class="${classMap({
          hasIcon: this.icon,
          unresizable: this.unresizable
        })}"
        .value="${live(this.value)}"
        .placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        maxlength="${this.maxlength}"
        @input="${this.handleInput}"
        @change="${this.handleChange}"
      ></textarea>
    `
  }

  render () {
    return html`
      <div
        id="root"
        class="${classMap({
          requiredPlaceholder: !this.label && this.required,
          invalid: this.errorMessage
        })}"
      >
        <div id="wrapper">
          ${this.label
            ? html`<label for="field">${this.label}</label>`
            : nothing}
          <div id="fieldGroup">
            ${this.prefix
              ? html`
                  <div id="prefix">
                    <span style="padding-bottom: 1px;">${this.prefix}</span>
                  </div>
                `
              : nothing}
            ${this.multiline ? this.renderTextarea() : this.renderInput()}
            ${this.icon
              ? html`<i @click="${this.handleClick}">${iconCode[this.icon]}</i>`
              : nothing}
            ${this.sufix
              ? html`
                  <div id="sufix">
                    <span style="padding-bottom: 1px;">${this.sufix}</span>
                  </div>
                `
              : nothing}
          </div>
        </div>
        ${this.description || this.errorMessage
          ? html`
              <span>
                ${this.description
                  ? html`<span id="description">${this.description}</span>`
                  : nothing}
                ${this.errorMessage
                  ? html`
                      <p id="errorMessage" class="slideDownIn20">
                        <span>${this.errorMessage}</span>
                      </p>
                    `
                  : nothing}
              </span>
            `
          : nothing}
      </div>
    `
  }
}

customElements.define('fluent-text-field', TextField)

export default TextField

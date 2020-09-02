import { html, nothing } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import StyledElement from '../styled-element'
import styles from './combo-element.css'

export default class ComboElement extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      label: { type: String, reflect: true },
      description: { type: String, reflect: true },
      invalid: { type: Boolean, reflect: true },
      errorMessage: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
      borderless: { type: Boolean, reflect: true },
      underlined: { type: Boolean, reflect: true },
      open: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()

    this.label = ''
    this.description = ''
    this.errorMessage = ''
    this.invalid = false
    this.disabled = false
    this.required = false
    this.borderless = false
    this.underlined = false
  }

  labelClick () {}

  renderLabel () {
    return !this.label
      ? nothing
      : this.constructor.fieldId
        ? html`<label id="label" for="${this.constructor.fieldId}">
          ${this.label}
        </label>`
        : html`<label id="label" @click="${this.labelClick}">
          ${this.label}
        </label>`
  }

  renderInputField () {
    return nothing
  }

  renderDropdown () {
    return nothing
  }

  render () {
    return html`
      <div
        id="root"
        class="${classMap({
          requiredPlaceholder: !this.label && this.required,
          invalid: this.invalid || this.errorMessage
        })}"
      >
        <div id="elementWrapper">
          ${this.renderLabel()}
          <div id="fieldWrapper">
            <div id="fieldGroup">${this.renderInputField()}</div>
            <div id="dropdown">${this.renderDropdown()}</div>
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

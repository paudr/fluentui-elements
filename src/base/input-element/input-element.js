import { LitElement, html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import defineStyleSheetProperty from '../../utils/style-sheet-property'
import styles from './input-element.css'

export default class InputElement extends LitElement {
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
      underlined: { type: Boolean, reflect: true }
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
      ? undefined
      : this.constructor.fieldId
        ? html`<label id="label" for="${this.constructor.fieldId}">
          ${this.label}
        </label>`
        : html`<label id="label" @click="${this.labelClick}">
          ${this.label}
        </label>`
  }

  renderInputField () {
    return undefined
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
        <div id="wrapper">
          ${this.renderLabel()}
          <div id="fieldGroup">${this.renderInputField()}</div>
        </div>
        ${this.description || this.errorMessage
          ? html`
              <span>
                ${this.description
                  ? html`<span id="description">${this.description}</span>`
                  : undefined}
                ${this.errorMessage
                  ? html`
                      <p id="errorMessage" class="slideDownIn20">
                        <span>${this.errorMessage}</span>
                      </p>
                    `
                  : undefined}
              </span>
            `
          : undefined}
      </div>
    `
  }
}

defineStyleSheetProperty(InputElement)

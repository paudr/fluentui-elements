import { LitElement, html } from 'lit-element'
import { nothing } from 'lit-html'
import defineStyleSheetProperty from '../../utils/style-sheet-property'
import styles from './button.css'
import iconCode from '../icon/code'

class Button extends LitElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      type: { type: String, reflect: true },
      primary: { type: Boolean, reflect: true },
      text: { type: String, reflect: true },
      secondaryText: { type: String, reflect: true },
      icon: { type: String, reflect: true },
      href: { type: String, reflect: true },
      target: { type: String, reflect: true },
      checked: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()

    this.type = 'default'
    this.primary = false
    this.text = ''
    this.secondaryText = ''
    this.icon = ''
    this.href = ''
    this.target = ''
    this.checked = false
    this.disabled = false
  }

  handleClick (event) {
    event.stopPropagation()
    if (
      this.disabled ||
      !this.dispatchEvent(new CustomEvent('click', { cancelable: true }))
    ) {
      event.preventDefault()
    }
  }

  renderContent () {
    return html`
      <span id="container">
        ${this.icon ? html`<i>${iconCode[this.icon]}</i>` : nothing}
        ${this.text || this.secondaryText
          ? html`
              <span id="textContainer">
                ${this.text
                  ? html`<span id="label">${this.text}</span>`
                  : nothing}
                ${this.secondaryText
                  ? html`<span id="description">${this.secondaryText}</span>`
                  : nothing}
              </span>
            `
          : nothing}
      </span>
    `
  }

  renderButton () {
    return html`
      <button id="root" @click="${this.handleClick}">
        ${this.renderContent()}
      </button>
    `
  }

  renderAnchor () {
    return html`
      <a
        id="root"
        .href="${this.href}"
        .target="${this.target}"
        @click="${this.handleClick}"
      >
        ${this.renderContent()}
      </a>
    `
  }

  render () {
    return html`${this.href ? this.renderAnchor() : this.renderButton()}`
  }
}

defineStyleSheetProperty(Button)

customElements.define('fluent-button', Button)

export default Button

import { LitElement, html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import defineStyleSheetProperty from '../../utils/style-sheet-property'
import styles from './toggle.css'

class Toggle extends LitElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      checked: { type: Boolean, reflect: true },
      label: { type: String, reflect: true },
      onText: { type: String, reflect: true },
      offText: { type: String, reflect: true },
      inline: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.checked = false
    this.label = ''
    this.onText = ''
    this.offText = ''
    this.inline = false
    this.disabled = false
  }

  handleClick () {
    if (!this.disabled) {
      this.checked = !this.checked
      this.dispatchEvent(new CustomEvent('change', { detail: this.checked }))
    }
  }

  render () {
    const withText = this.onText ?? this.offText
    return html`
      <div id="root" class="${classMap({ withoutText: !withText })}">
        ${this.label
          ? html`<label id="fieldLabel">${this.label}</label>`
          : undefined}
        <div id="container">
          <button
            id="toggle"
            class="${this.checked ? 'checked' : undefined}"
            @click="${this.handleClick}"
          >
            <span></span>
          </button>
          ${withText
            ? html`<label for="toggle" id="stateText">
                ${this.checked ? this.onText : this.offText}
              </label>`
            : undefined}
        </div>
      </div>
    `
  }
}

defineStyleSheetProperty(Toggle)

customElements.define('fluent-toggle', Toggle)

export default Toggle

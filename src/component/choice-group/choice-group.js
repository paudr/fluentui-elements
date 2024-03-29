import { LitElement, html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import defineStyleSheetProperty from '../../utils/style-sheet-property'
import styles from './choice-group.css'

class ChoiceGroup extends LitElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      value: { type: String, reflect: true },
      label: { type: String, reflect: true },
      required: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      options: { type: Array },
      inRow: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.value = null
    this.label = ''
    this.required = false
    this.disabled = false
    this.options = []
    this.inRow = false
  }

  setOption (option) {
    if (!(this.disabled || option.disabled)) {
      const value = option.value
      const oldValue = this.value
      if (value !== oldValue) {
        this.value = value
        this.dispatchEvent(
          new CustomEvent('change', { detail: { value, oldValue } })
        )
      }
    }
  }

  render () {
    return html`
      ${this.label ? html`<label id="label">${this.label}</label>` : undefined}
      <div id="container">
        ${this.options.map(
          option => html`
            <div>
              <div
                class="${classMap({
                  field: true,
                  checked: this.value === option.value,
                  disabled: this.disabled || option.disabled
                })}"
                @click="${() => this.setOption(option)}"
              >
                <label>
                  <span>${option.text}</span>
                </label>
              </div>
            </div>
          `
        )}
      </div>
    `
  }
}

defineStyleSheetProperty(ChoiceGroup)

customElements.define('fluent-choice-group', ChoiceGroup)

export default ChoiceGroup

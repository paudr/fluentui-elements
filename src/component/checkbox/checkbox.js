import { LitElement, html } from 'lit-element'
import { nothing } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import defineStyleSheetProperty from '../../utils/style-sheet-property'
import styles from './checkbox.css'
import iconCode from '../icon/code'

class Checkbox extends LitElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      checked: { type: Boolean, reflect: true },
      label: { type: String, reflect: true },
      boxSide: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      indeterminate: { type: Boolean, reflect: true },
      defaultChecked: { type: Boolean, reflect: true },
      valueTrue: { type: Object, reflect: true },
      valueFalse: { type: Object, reflect: true }
    }
  }

  constructor () {
    super()
    this.checked = false
    this.label = ''
    this.boxSide = 'start'
    this.disabled = false
    this.indeterminate = false
    this.defaultChecked = false
    this.valueTrue = 1
    this.falseValue = 0
  }

  get value () {
    return this.indeterminate
      ? undefined
      : this.checked
        ? this.valueTrue
        : this.valueFalse
  }

  set value (value) {
    const oldValue = this.checked
    this.checked = value !== this.valueFalse
    this.requestUpdate('checked', oldValue)
  }

  handleClick (event) {
    event.stopPropagation()
    if (!this.disabled) {
      if (this.indeterminate) {
        this.indeterminate = false
        this.checked = this.defaultChecked
      } else {
        this.checked = !this.checked
      }
      this.dispatchEvent(new CustomEvent('change'))
    }
  }

  render () {
    return html`
      <label
        class="${classMap({ checked: !this.indeterminate && this.checked })}"
        @click="${this.handleClick}"
      >
        <div>
          <i>${iconCode.CheckMark}</i>
        </div>
        ${this.label ? html`<span>${this.label}</span>` : nothing}
      </label>
    `
  }
}

defineStyleSheetProperty(Checkbox)

customElements.define('fluent-checkbox', Checkbox)

export default Checkbox

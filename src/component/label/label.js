import { LitElement, html } from 'lit-element'
import { getLabelStyle } from '../../theme/mixins.css'

class Label extends LitElement {
  static get styles () {
    return getLabelStyle()
  }

  static get properties () {
    return {
      required: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.required = false
    this.disabled = false
  }

  render () {
    return html`<slot></slot>`
  }
}

customElements.define('fluent-label', Label)

export default Label

import { LitElement, css } from 'lit-element'
import { iconCss } from '../../theme/mixins.css'
import code from './code'

class Icon extends LitElement {
  static get styles () {
    return css`
      :host {
        ${iconCss}
        width: 1em;
        height: 1em;
      }
    `
  }

  static get properties () {
    return {
      name: { type: String, reflect: true }
    }
  }

  constructor () {
    super()
    this.name = ''
  }

  render () {
    return code[this.name]
  }
}

customElements.define('fluent-icon', Icon)

export default Icon

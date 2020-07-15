import { html, css } from 'lit-element'
import StyledElement from '../../utils/styled-element'
import { themeLight, themePrimary } from '../../theme/color.css'
import { fontStyle } from '../../theme/typografy.css'

class Spinner extends StyledElement {
  static get styles () {
    return css`
      @keyframes Spinner-spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      #circle {
        margin: auto;
        box-sizing: border-box;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        border: 1.5px solid ${themeLight};
        border-top-color: ${themePrimary};
        animation: Spinner-spin 1.3s infinite
          cubic-bezier(0.53, 0.21, 0.29, 0.67);
        width: 20px;
        height: 20px;
      }

      :host([type='large']) #circle {
        width: 28px;
        height: 28px;
      }

      :host([type='small']) #circle {
        width: 16px;
        height: 16px;
      }

      :host([type='xSmall']) #circle {
        width: 12px;
        height: 12px;
      }

      #label {
        ${fontStyle.medium};
        color: ${themePrimary};
        margin-top: 10px;
        text-align: center;
      }
    `
  }

  static get properties () {
    return {
      type: { type: String, reflect: true },
      label: { type: String, reflect: true }
    }
  }

  constructor () {
    super()
    this.type = ''
    this.label = ''
  }

  render () {
    return html`
      <div id="circle"></div>
      ${this.label ? html`<div id="label">${this.label}</div>` : ''}
    `
  }
}

customElements.define('fluent-spinner', Spinner)

export default Spinner

import { html, css } from 'lit-element'
import StyledElement from '../../utils/styled-element'
import { blackTranslucent40, whiteTranslucent40 } from '../../theme/color.css'

class Overlay extends StyledElement {
  static get styles () {
    return css`
      :host {
        position: fixed;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        visibility: hidden;
        z-index: 1000000;
      }

      #root {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        visibility: visible;
        background-color: ${whiteTranslucent40};
      }

      :host([dark]) #root {
        background-color: ${blackTranslucent40};
      }
    `
  }

  static get properties () {
    return {
      dark: { type: Boolean, reflect: true },
      autoClose: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.dark = false
    this.autoClose = false
  }

  close (launchEvent = true) {
    if (
      !launchEvent ||
      this.dispatchEvent(new CustomEvent('close', { cancelable: true }))
    ) {
      this.parentElement.removeChild(this)
    }
  }

  handleClick (event) {
    event.stopPropagation()
    event.preventDefault()
    if (event.target === this.shadowRoot.getElementById('root')) {
      if (this.autoClose) {
        this.close(true)
      } else {
        this.dispatchEvent(new CustomEvent('click'))
      }
    }
  }

  render () {
    return html`<div id="root" @click="${this.handleClick}"><slot></slot></div>`
  }
}

customElements.define('fluent-overlay', Overlay)

export default Overlay

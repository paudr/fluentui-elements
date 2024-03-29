import { LitElement, html } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map'
import defineStyleSheetProperty from '../../utils/style-sheet-property'
import styles, { overlay } from './dialog.css'
import iconCode from '../icon/code'
import '../overlay'

class Dialog extends LitElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      type: { type: String, reflect: true },
      header: { type: String, reflect: true },
      text: { type: String, reflect: true },
      minWidth: { type: String, reflect: true },
      maxWidth: { type: String, reflect: true },
      minHeight: { type: String, reflect: true },
      maxHeight: { type: String, reflect: true },
      overlay: { type: Boolean, reflect: true },
      dark: { type: Boolean, reflect: true },
      autoClose: { type: Boolean, reflect: true },
      isLightDismiss: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.type = 'normal'
    this.header = ''
    this.text = ''
    this.minWidth = null
    this.maxWidth = null
    this.minHeight = null
    this.maxHeight = null
    this.overlay = false
    this.dark = false
    this.autoClose = false
    this.isLightDismiss = false
  }

  get typeClass () {
    return ['normal', 'largeHeader', 'close'].includes(this.type)
      ? this.type
      : 'normal'
  }

  handleClose (event) {
    event.stopPropagation()
    event.preventDefault()
    if (this.autoClose) {
      this.close(true)
    } else {
      this.dispatchEvent(new CustomEvent('close'))
    }
  }

  handleOverlayClose (event) {
    if (this.isLightDismiss) return this.handleClose(event)
  }

  close (launchEvent = true) {
    if (
      !launchEvent ||
      this.dispatchEvent(new CustomEvent('close', { cancelable: true }))
    ) {
      this.parentElement.removeChild(this)
    }
  }

  renderContent () {
    return html`
      <div
        id="root"
        class="${this.typeClass}"
        style="${styleMap({
          minWidth: this.minWidth,
          maxWidth: this.maxWidth,
          minHeight: this.minHeight,
          maxHeight: this.maxHeight
        })}"
        alt=""
      >
        <div id="header">
          <div id="title">${this.header}</div>
          ${this.type === 'close'
            ? html`<div id="topButton">
                <button @click="${this.handleClose}">
                  <i>${iconCode.Cancel}</i>
                </button>
              </div>`
            : undefined}
        </div>
        <div id="inner">
          <div id="content">
            ${this.text ? html`<p id="subText">${this.text}</p>` : undefined}
            <slot></slot>
          </div>
          <slot name="footer"></slot>
        </div>
      </div>
    `
  }

  render () {
    return this.overlay
      ? html`<fluent-overlay
          id="overlay"
          .dark="${this.dark}"
          .styleSheet="${overlay.styleSheet}"
          @click="${this.handleOverlayClose}"
        >
          ${this.renderContent()}
        </fluent-overlay>`
      : this.renderContent()
  }
}

defineStyleSheetProperty(Dialog)

customElements.define('fluent-dialog', Dialog)

export default Dialog

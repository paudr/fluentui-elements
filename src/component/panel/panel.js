import { html, nothing } from 'lit-html'
import { styleMap } from 'lit-html/directives/style-map'
import StyledElement from '../../base/styled-element'
import styles from './panel.css'
import iconCode from '../icon/code'
import '../overlay'

class Panel extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      type: { type: String, reflect: true },
      width: { type: String, reflect: true },
      minWidth: { type: String, reflect: true },
      maxWidth: { type: String, reflect: true },
      left: { type: Boolean, reflect: true },
      headerText: { type: String, reflect: true },
      withoutCloseButton: { type: Boolean, reflect: true },
      overlay: { type: Boolean, reflect: true },
      dark: { type: Boolean, reflect: true },
      autoClose: { type: Boolean, reflect: true },
      isLightDismiss: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.type = 'custom'
    this.width = ''
    this.left = false
    this.headerText = ''
    this.withoutCloseButton = false
    this.overlay = false
    this.dark = false
    this.autoClose = false
    this.isLightDismiss = false
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

  renderHeader () {
    return html`<div id="header"><div>${this.headerText}</div></div>`
  }

  renderContent () {
    return html`
      <div
        id="root"
        style=${styleMap({
          width: this.type === 'custom' ? this.width : '',
          minWidth: this.type === 'custom' ? this.minWidth : '',
          maxWidth: this.type === 'custom' ? this.maxWidth : ''
        })}
      >
        <div id="commands">
          ${!this.withoutCloseButton
            ? html`
                <div id="navigation">
                  ${this.renderHeader()}
                  <button @click="${this.handleClose}">
                    <i>${iconCode.Cancel}</i>
                  </button>
                </div>
              `
            : nothing}
        </div>
        <div id="contentInner">
          ${this.withoutCloseButton ? this.renderHeader() : nothing}
          <div id="scrollableContent">
            <div id="content">
              <slot></slot>
            </div>
          </div>
          <div id="footer">
            <div id="footerInner">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    `
  }

  render () {
    return this.overlay
      ? html` <fluent-overlay
          id="overlay"
          .dark="${this.dark}"
          @click="${this.handleOverlayClose}"
        >
          ${this.renderContent()}
        </fluent-overlay>`
      : this.renderContent()
  }
}

customElements.define('fluent-panel', Panel)

export default Panel

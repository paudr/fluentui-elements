import { html, nothing } from 'lit-html'
import StyledElement from '../../utils/styled-element'
import styles from './search-box.css'
import iconCode from '../icon/code'

class SearchBox extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      label: { type: String, reflect: true },
      icon: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      disableAnimation: { type: Boolean, reflect: true },
      underlined: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      value: { type: String, reflect: true }
    }
  }

  constructor () {
    super()

    this.label = ''
    this.icon = 'Search'
    this.placeholder = 'Search'
    this.disableAnimation = false
    this.underlined = false
    this.disabled = false
  }

  get value () {
    const input = this.renderRoot.querySelector('input')
    return input ? input.value : ''
  }

  set value (value) {
    const input = this.renderRoot.querySelector('input')
    if (input) {
      input.value = value
      this.requestUpdate('value', value)
    }
  }

  clear () {
    const input = this.renderRoot.querySelector('input')
    input.value = ''
    this.requestUpdate()
    this.dispatchEvent(new CustomEvent('change'), {
      detail: { value: '' }
    })
  }

  handleInput () {
    this.requestUpdate()
  }

  handleKeydown (event) {
    if (event.key === 'Escape') {
      event.stopPropagation()
      event.preventDefault()
      this.clear()
      this.dispatchEvent(new CustomEvent('escape'))
    } else if (event.key === 'Enter') {
      event.stopPropagation()
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('search'), {
        detail: { value: event.target.value }
      })
    }
  }

  handleChange (event) {
    this.dispatchEvent(new CustomEvent('change'), {
      detail: { value: event.target.value }
    })
  }

  render () {
    const input = this.renderRoot.querySelector('input')
    const value = input ? input.value : null
    return html`
      ${this.label ? html`<label for="field">${this.label}</label>` : nothing}
      <div id="root">
        <div id="icon">
          <i>${iconCode[this.icon]}</i>
        </div>
        <input
          id="field"
          type="text"
          ?disabled="${this.disabled}"
          .placeholder="${this.placeholder}"
          @input="${this.handleInput}"
          @keydown="${this.handleKeydown}"
          @change="${this.handleChange}"
        />
        ${value && !this.disabled
          ? html`<div id="clear">
              <button @click="${this.clear}">
                <span>
                  <i>${iconCode.Clear}</i>
                </span>
              </button>
            </div>`
          : nothing}
      </div>
    `
  }
}

customElements.define('fluent-search-box', SearchBox)

export default SearchBox

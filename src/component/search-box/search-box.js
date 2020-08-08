import { html, nothing } from 'lit-html'
import InputElement from '../../base/input-element'
import styles from './search-box.css'
import iconCode from '../icon/code'

class SearchBox extends InputElement {
  static get styles () {
    return [InputElement.styles, styles]
  }

  static get properties () {
    return {
      ...InputElement.properties,
      icon: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      disableAnimation: { type: Boolean, reflect: true },
      value: { type: String, reflect: true }
    }
  }

  constructor () {
    super()
    this.icon = 'Search'
    this.placeholder = 'Search'
    this.disableAnimation = false
  }

  get value () {
    const input = this.renderRoot.querySelector('input')
    return input ? input.value : ''
  }

  set value (value) {
    const input = this.renderRoot.querySelector('input')
    if (input) {
      input.value = value
    }
  }

  clear () {
    const input = this.renderRoot.querySelector('input')
    if (input) {
      input.value = ''
    }
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

  renderInputField () {
    const input = this.renderRoot.querySelector('input')
    const value = input ? input.value : null
    return html`
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
    `
  }
}

customElements.define('fluent-search-box', SearchBox)

export default SearchBox

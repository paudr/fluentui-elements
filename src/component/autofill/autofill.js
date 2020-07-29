import { LitElement, html, css } from 'lit-element'
import { live } from 'lit-html/directives/live'
import { commonStartLength, startsWith } from '../../utils/text'
import { normalize } from '../../theme/mixins.css'
import { fontStyle } from '../../theme/typografy.css'
import { neutralLighter, neutralPrimary } from '../../theme/color.css'

const _privateData = new WeakMap()

class Autofill extends LitElement {
  static get styles () {
    return css`
      :host {
        ${normalize};
        display: flex;
      }

      :host([inline]) {
        display: inline-flex;
      }

      input {
        padding: 0px;
        flex-grow: 1;
        background-color: transparent;
        border: 0px none transparent;
        outline: none;
        ${fontStyle.medium};
        color: ${neutralPrimary};
        text-overflow: ellipsis;
      }

      :host([disabled]) input {
        background-color: ${neutralLighter};
        border-color: ${neutralLighter};
        pointer-events: none;
        cursor: default;
      }
    `
  }

  static get properties () {
    return {
      value: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      autofill: { type: Boolean, reflect: true },
      suggestedValue: { type: String, reflect: true },
      accentInsensitive: { type: Boolean, reflect: true },
      inline: { type: Boolean, reflect: true },
      readOnly: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true }
    }
  }

  constructor () {
    super()
    this.placeholder = ''
    this.autofill = false
    this.accentInsensitive = false
    this.inline = false
    this.readOnly = false
    this.disabled = false
    _privateData.set(this, {
      value: '',
      suggestedValue: ''
    })
  }

  get value () {
    return _privateData.get(this).value
  }

  set value (value) {
    _privateData.get(this).value = value
    const input = this.shadowRoot.querySelector('input')
    if (input) input.value = value
    this.writeSuggestion()
  }

  get suggestedValue () {
    return _privateData.get(this).suggestedValue
  }

  set suggestedValue (value) {
    _privateData.get(this).suggestedValue = value
    this.writeSuggestion()
  }

  focus () {
    if (!this.disabled) {
      this.shadowRoot.querySelector('input').focus()
    }
  }

  write (text) {
    const input = this.shadowRoot.querySelector('input')
    if (input) {
      input.value = text
      input.setSelectionRange(text.length, text.length, 'backward')
    }
  }

  suggest (text, fullSelection = false) {
    const input = this.shadowRoot.querySelector('input')
    if (input) {
      const maxselectionStart =
        input.selectionStart !== input.selectionEnd &&
        input.selectionEnd === input.value.length
          ? input.selectionStart
          : input.value.length
      const selecionStart = fullSelection
        ? 0
        : commonStartLength(
          input.value,
          text,
          maxselectionStart,
          this.accentInsensitive
        )
      input.focus()
      input.value = text
      input.setSelectionRange(selecionStart, text.length, 'backward')
    }
  }

  selectAllText () {
    const input = this.shadowRoot.querySelector('input')
    if (input) {
      input.setSelectionRange(0, input.value.length, 'backward')
    }
  }

  writeSuggestion () {
    const input = this.shadowRoot.querySelector('input')
    if (input) {
      const data = _privateData.get(this)
      if (this.shadowRoot.activeElement === input && this.autofill) {
        if (!data.value) {
          input.value = ''
        } else if (
          startsWith(this.suggestedValue, this.value, this.accentInsensitive)
        ) {
          const typedLength = data.value.length
          input.value = this.suggestedValue
          input.setSelectionRange(typedLength, input.value.length, 'backward')
        }
      }
    }
  }

  handleInput (event) {
    event.stopPropagation()
    event.preventDefault()
    const data = _privateData.get(this)
    if (data.value !== event.target.value) {
      data.value = event.target.value
      this.writeSuggestion()
      this.dispatchEvent(new CustomEvent('input', { detail: data.value }))
    }
  }

  handleChange (event) {
    this.dispatchEvent(
      new CustomEvent('change', { detail: event.target.value })
    )
  }

  handlekeydown (event) {
    const data = _privateData.get(this)
    const { code, target: input } = event
    const selectedText = input.value.substring(
      input.selectionStart,
      input.selectionEnd
    )
    if (
      this.autofill &&
      event.code === 'Backspace' &&
      data.value &&
      input.selectionStart !== input.selectionEnd &&
      input.value === data.value + selectedText
    ) {
      data.value = data.value.substring(0, data.value.length - 1)
      event.preventDefault()
      this.writeSuggestion()
      this.dispatchEvent(new CustomEvent('input', { detail: data.value }))
    } else if (code === 'ArrowUp') {
      event.stopPropagation()
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('navigate', { detail: -1 }))
    } else if (code === 'ArrowDown') {
      event.stopPropagation()
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('navigate', { detail: +1 }))
    } else if (code === 'Backspace' && data.value === '') {
      event.stopPropagation()
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('remove'))
    } else if (code === 'Enter') {
      event.stopPropagation()
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('select'))
    } else if (code === 'Escape') {
      event.stopPropagation()
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('escape'))
    }
  }

  render () {
    const data = _privateData.get(this)
    return html`
      <input
        type="text"
        tabindex="0"
        .value="${live(data.value)}"
        .placeholder="${this.placeholder}"
        .readOnly="${this.readOnly}"
        @input="${this.handleInput}"
        @change="${this.handleChange}"
        @keydown="${this.handlekeydown}"
      />
    `
  }
}

customElements.define('fluent-autofill', Autofill)

export default Autofill

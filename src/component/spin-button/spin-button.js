import { html } from 'lit-html'
import { live } from 'lit-html/directives/live'
import InputElement from '../../base/input-element'
import styles from './spin-button.css'
import iconCode from '../icon/code'
import '../icon'

function defaultStringify (value) {
  return typeof value === 'number' ? value.toString() : ''
}

function defaultParser (text) {
  const value = Number(text)
  return isNaN(value) ? null : value
}

function defaultInc (value) {
  return value + (this.step || 1)
}

function defaultDec (value) {
  return value - (this.step || 1)
}

const _privateData = new WeakMap()

class SpinButton extends InputElement {
  static get styles () {
    return [InputElement.styles, styles]
  }

  static get properties () {
    return {
      ...InputElement.properties,
      icon: { type: String, reflect: true },
      step: { type: Number, reflect: true },
      stringify: { type: Function },
      parse: { type: Function },
      inc: { type: Function },
      dec: { type: Function },
      value: { type: Number, reflect: true }
    }
  }

  static get fieldId () {
    return 'field'
  }

  constructor () {
    super()

    this.label = ''
    this.icon = ''
    this.required = false
    this.disabled = false
    this.step = 1
    this.stringify = defaultStringify
    this.parse = defaultParser
    this.inc = defaultInc
    this.dec = defaultDec

    _privateData.set(this, {
      value: null,
      oldValue: null
    })
  }

  get value () {
    return _privateData.get(this).value
  }

  set value (value) {
    this.updateValue(value)
  }

  updateValue (value, emitEvent = false) {
    const data = _privateData.get(this)
    const oldValue = data.value
    if (oldValue !== value) {
      data.oldValue = oldValue
      data.value = value
      if (emitEvent) {
        this.dispatchEvent(
          new CustomEvent('change', { detail: { value, oldValue } })
        )
      }
      this.requestUpdate('value', oldValue)
    }
  }

  handleClickUp () {
    if (!this.disabled) {
      const { value } = _privateData.get(this)
      this.updateValue(this.inc(value), true)
    }
  }

  handleClickDown () {
    if (!this.disabled) {
      const { value } = _privateData.get(this)
      this.updateValue(this.dec(value), true)
    }
  }

  handleChange () {
    const input = this.renderRoot.querySelector('input')
    const value = this.parse(input.value)
    if (value !== null) {
      this.updateValue(value, true)
    } else {
      const { oldValue } = _privateData.get(this)
      input.value = this.stringify(oldValue)
    }
  }

  renderInputField () {
    return html`
      <input
        id="${SpinButton.fieldId}"
        type="text"
        .value="${live(this.stringify(this.value))}"
        ?disabled="${this.disabled}"
        @change="${this.handleChange}"
      />
      <span id="arrowBox">
        <button
          class="up"
          ?disabled="${this.disabled}"
          @click="${this.handleClickUp}"
        >
          <i>${iconCode.ChevronUpSmall}</i>
        </button>
        <button
          class="down"
          ?disabled="${this.disabled}"
          @click="${this.handleClickDown}"
        >
          <i>${iconCode.ChevronDownSmall}</i>
        </button>
      </span>
    `
  }
}

customElements.define('fluent-spin-button', SpinButton)

export default SpinButton

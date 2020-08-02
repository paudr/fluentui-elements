import { html, nothing } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import { live } from 'lit-html/directives/live'
import StyledElement from '../../utils/styled-element'
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

class SpinButton extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      label: { type: String, reflect: true },
      icon: { type: String, reflect: true },
      required: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      labelPosition: { type: String, reflect: true },
      step: { type: Number, reflect: true },
      stringify: { type: Function },
      parse: { type: Function },
      inc: { type: Function },
      dec: { type: Function },
      value: { type: Number, reflect: true }
    }
  }

  constructor () {
    super()

    this.label = ''
    this.icon = ''
    this.required = false
    this.disabled = false
    this.labelPosition = ''
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
    const input = this.shadowRoot.querySelector('input')
    const value = this.parse(input.value)
    if (value !== null) {
      this.updateValue(value, true)
    } else {
      const { oldValue } = _privateData.get(this)
      input.value = this.stringify(oldValue)
    }
  }

  render () {
    return html`
      <div
        id="root"
        class="${classMap({
          start: this.labelPosition === 'start',
          end: this.labelPosition === 'end'
        })}"
      >
        ${this.icon || this.label
          ? html`
              <div id="labelWrapper">
                ${this.icon ? html`<i>${iconCode[this.icon]}</i>` : nothing}
                ${this.label
                  ? html`<label for="field">${this.label}</label>`
                  : nothing}
              </div>
            `
          : nothing}
        <div id="fieldWrapper">
          <input
            id="field"
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
        </div>
      </div>
    `
  }
}

customElements.define('fluent-spin-button', SpinButton)

export default SpinButton

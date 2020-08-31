import { html } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import { live } from 'lit-html/directives/live'
import TextField from '../text-field'

function defaultParse (text) {
  return text === ''
    ? null
    : Number(
      text
        .replace(/(?:€|%)$/g, '')
        .replace(/\./g, '')
        .replace(',', '.')
    )
}

function defaultStringify (number) {
  if (number == null) return ''

  const options = {
    style: this.formatStyle,
    currency: 'EUR',
    useGrouping: this.useGrouping,
    minimumIntegerDigits: this.minimumIntegerDigits,
    minimumFractionDigits: this.minimumFractionDigits,
    maximumFractionDigits: this.maximumFractionDigits
  }

  if (this.minimumSignificantDigits > 0 && this.minimumSignificantDigits < 22) {
    options.minimumSignificantDigits = this.minimumSignificantDigits
  }

  if (this.maximumSignificantDigits > 0 && this.maximumSignificantDigits < 22) {
    options.maximumSignificantDigits = this.maximumSignificantDigits
  }

  const normalizedNum = this.formatStyle === 'percent' ? number / 100 : number
  return normalizedNum.toLocaleString('ca-ES', options)
}

const _privateData = new WeakMap()

class NumberField extends TextField {
  static get properties () {
    return {
      ...TextField.properties,
      formatStyle: { type: String, reflect: true },
      useGrouping: { type: Boolean, reflect: true },
      minimumIntegerDigits: { type: Boolean, reflect: true },
      minimumFractionDigits: { type: Boolean, reflect: true },
      maximumFractionDigits: { type: Boolean, reflect: true },
      minimumSignificantDigits: { type: Boolean, reflect: true },
      maximumSignificantDigits: { type: Boolean, reflect: true },
      max: { type: Number, reflect: true },
      min: { type: Number, reflect: true },

      value: { type: Number, reflect: true },
      text: { type: String, reflect: true },
      parse: { type: Function },
      stringify: { type: Function }
    }
  }

  constructor () {
    super()
    this.formatStyle = 'decimal'
    this.useGrouping = false
    this.minimumIntegerDigits = 1
    this.minimumFractionDigits = 0
    this.maximumFractionDigits = 20
    this.minimumSignificantDigits = 0
    this.maximumSignificantDigits = 0
    this.max = null
    this.min = null
    this.parse = defaultParse
    this.stringify = defaultStringify
    _privateData.set(this, {
      value: null,
      oldValue: null
    })
  }

  get value () {
    return _privateData.get(this).value
  }

  set value (value) {
    const data = _privateData.get(this)
    data.value = value
    data.oldValue = value
    const field = this.renderRoot.querySelector('.field')
    if (field) {
      field.value = this.text
    }
  }

  get text () {
    return this.stringify(_privateData.get(this).value) ?? ''
  }

  set text (value) {
    const number = this.parse(value)
    if (!isNaN(number)) {
      this.value = number
    }
  }

  handleChange (event) {
    const { oldValue } = _privateData.get(this)
    const number = this.parse(event.target.value)
    if (
      !isNaN(number) &&
      (this.min == null ||
        this.min === '' ||
        this.min === -1 ||
        number >= this.min) &&
      (this.max == null ||
        this.max === '' ||
        this.max === -1 ||
        number <= this.max)
    ) {
      this.value = number
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            value: number,
            oldValue
          }
        })
      )
    } else {
      event.target.value = this.stringify(oldValue) ?? ''
    }
  }

  renderInput () {
    return html`
      <input
        id="${TextField.fieldId}"
        type="text"
        class="${classMap({ hasIcon: this.icon })}"
        .value="${live(this.text)}"
        .placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        maxlength="${this.maxlength}"
        @input="${this.handleInput}"
        @change="${this.handleChange}"
      />
    `
  }

  renderTextarea () {
    return html`
      <textarea
        id="${TextField.fieldId}"
        class="${classMap({
          hasIcon: this.icon,
          unresizable: this.unresizable
        })}"
        .value="${live(this.text)}"
        .placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        maxlength="${this.maxlength}"
        @input="${this.handleInput}"
        @change="${this.handleChange}"
      ></textarea>
    `
  }
}

customElements.define('fluent-number-field', NumberField)

export default NumberField

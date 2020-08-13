import { html } from 'lit-html'
import { live } from 'lit-html/directives/live'
import ComboElement from '../../base/combo-element'
import styles from './date-picker.css'
import iconCode from '../icon/code'
import '../calendar'

class DatePicker extends ComboElement {
  static get styles () {
    return [ComboElement.styles, styles]
  }

  static get properties () {
    return {
      ...ComboElement.properties,
      value: { type: Date, reflect: true },
      today: { type: Date, reflect: true },
      firstDayOfTheWeek: { type: Number, reflect: true },
      goToday: { type: String, reflect: true },
      days: { type: Array },
      months: { type: Array },
      placeholder: { type: String, reflect: true },
      notWritable: { type: Boolean, reflect: true },
      stringify: { type: Function },
      parse: { type: Function }
    }
  }

  static get fieldId () {
    return 'field'
  }

  constructor () {
    super()

    this.value = null
    this.today = new Date()
    this.firstDayOfTheWeek = 1
    this.goToday = ''
    this.days = ['d', 'l', 'm', 'x', 'j', 'v', 's']
    this.months = [
      'Gener',
      'Febrer',
      'Març',
      'Abril',
      'Maig',
      'Juny',
      'Juliol',
      'Agost',
      'Setembre',
      'Octubre',
      'Novembre',
      'Desembre'
    ]
    this.open = false
    this.placeholder = ''
    this.notWritable = false
    this.stringify = date => {
      const padZero = (num, length = 2) => num.toString().padStart(length, '0')
      const day = padZero(date.getDate())
      const month = padZero(date.getMonth() + 1)
      const year = padZero(date.getFullYear(), 4)
      return `${day}/${month}/${year}`
    }
    this.parse = text => {
      const [, day, month, year] =
        text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/) ?? []
      return day && month && year
        ? new Date(Number(year), Number(month) - 1, Number(day))
        : null
    }
  }

  get currentYear () {
    return (this.value ?? new Date()).getFullYear()
  }

  get currentMonth () {
    return (this.value ?? new Date()).getMonth()
  }

  get textValue () {
    return this.value ? this.stringify(this.value) : ''
  }

  updateValue (date, emitEvent = false) {
    const value = date instanceof Date ? date : null
    if (
      value ||
      this.value ||
      (value && this.value && date.getTime() !== this.value.getTime()) ||
      (value == null && this.value)
    ) {
      const oldValue = this.value
      this.value = value
      if (emitEvent) {
        this.dispatchEvent(
          new CustomEvent('change', { detail: { value, oldValue } })
        )
      }
    }
  }

  handleClick () {
    if (this.notWritable && !this.disabled) {
      this.open = !this.open
    }
  }

  handleIconClick () {
    if (!this.disabled) {
      this.open = !this.open
    }
  }

  handleTextInput (event) {
    const date = this.parse(event.target.value)
    if (date) {
      this.updateValue(date, true)
    } else if (event.target.value === '') {
      this.updateValue(null, true)
    }
  }

  handleTextChange (event) {
    const date = this.parse(event.target.value)
    if (date) {
      this.updateValue(date, true)
      this.requestUpdate()
    } else if (event.target.value === '') {
      this.updateValue(null, true)
      this.requestUpdate()
    } else {
      event.target.value = this.textValue
    }
  }

  handleTextClick (event) {
    event.stopPropagation()
    if (this.notWritable) {
      this.open = !this.open
    }
  }

  handleCalendarChange (event) {
    const date = event.detail.value
    const textField = this.renderRoot.querySelector('fluent-text-field')
    this.updateValue(date, true)
    this.open = false
    textField.value = this.textValue
    this.requestUpdate()
  }

  renderInputField () {
    return html`
      <input
        id="${DatePicker.fieldId}"
        type="text"
        .value="${live(this.textValue)}"
        .placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.notWritable}"
        @input="${this.handleTextInput}"
        @change="${this.handleTextChange}"
        @click="${this.handleTextClick}"
      />
      <i @click="${this.handleIconClick}">${iconCode.Calendar}</i>
    `
  }

  renderDropdown () {
    return html`
      <fluent-calendar
        .selected="${this.value}"
        .today="${this.today}"
        .currentYear="${this.currentYear}"
        .currentMonth="${this.currentMonth}"
        .firstDayOfTheWeek="${this.firstDayOfTheWeek}"
        .goToday="${this.goToday}"
        .days="${this.days}"
        .months="${this.months}"
        @change="${this.handleCalendarChange}"
      ></fluent-calendar>
    `
  }
}

customElements.define('fluent-date-picker', DatePicker)

export default DatePicker

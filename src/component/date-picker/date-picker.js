import { html, nothing } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import { live } from 'lit-html/directives/live'
import StyledElement from '../../utils/styled-element'
import styles from './date-picker.css'
import iconCode from '../icon/code'
import '../calendar'

class DatePicker extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      label: { type: String, reflect: true },
      value: { type: Date, reflect: true },
      today: { type: Date, reflect: true },
      firstDayOfTheWeek: { type: Number, reflect: true },
      goToday: { type: String, reflect: true },
      days: { type: Array },
      months: { type: Array },
      showCalendar: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      description: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      errorMessage: { type: String, reflect: true },
      notWritable: { type: Boolean, reflect: true },
      stringify: { type: Function },
      parse: { type: Function }
    }
  }

  constructor () {
    super()

    this.label = ''
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
    this.showCalendar = false
    this.required = false
    this.disabled = false
    this.description = ''
    this.placeholder = ''
    this.errorMessage = ''
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
        text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/) || []
      return day && month && year
        ? new Date(Number(year), Number(month) - 1, Number(day))
        : null
    }
  }

  get currentYear () {
    return (this.value || new Date()).getFullYear()
  }

  get currentMonth () {
    return (this.value || new Date()).getMonth()
  }

  get textValue () {
    return this.value ? this.stringify(this.value) : ''
  }

  updateValue (date, emitEvent = false) {
    const value = date instanceof Date ? date : null
    if (
      value ||
      this.value ||
      (value && this.value && date.getTime() !== this.value.getTime())
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
      this.showCalendar = !this.showCalendar
    }
  }

  handleIconClick () {
    if (!this.disabled) {
      this.showCalendar = !this.showCalendar
    }
  }

  handleTextInput (event) {
    const date = this.parse(event.target.value)
    if (date) {
      this.updateValue(date, true)
    }
  }

  handleTextChange (event) {
    const date = this.parse(event.target.value)
    if (date) {
      this.updateValue(date, true)
      this.requestUpdate()
    } else {
      event.target.value = this.textValue
    }
  }

  handleTextClick (event) {
    event.stopPropagation()
    if (this.notWritable) {
      this.showCalendar = !this.showCalendar
    }
  }

  handleCalendarChange (event) {
    const date = event.detail.value
    const textField = this.shadowRoot.querySelector('fluent-text-field')
    this.updateValue(date, true)
    this.showCalendar = false
    textField.value = this.textValue
    this.requestUpdate()
  }

  render () {
    return html`
      ${this.label ? html`<label for="field">${this.label}</label>` : nothing}
      <div id="wrapper" class="${classMap({ invalid: this.errorMessage })}">
        <div id="fieldGroup">
          <input
            id="field"
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
        </div>
        ${this.showCalendar
          ? html`
              <div id="calendar">
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
              </div>
            `
          : nothing}
        ${this.description
          ? html`<span id="description">${this.description}</span>`
          : nothing}
        ${this.errorMessage
          ? html`
              <div id="errorMessage" class="slideDownIn20">
                ${this.errorMessage}
              </div>
            `
          : nothing}
      </div>
    `
  }
}

customElements.define('fluent-date-picker', DatePicker)

export default DatePicker

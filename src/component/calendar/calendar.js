import { html, nothing } from 'lit-html'
import StyledElement from '../../base/styled-element'
import styles from './calendar.css'
import CalendarDay from './calendar-day'
import CalendarMonth from './calendar-month'
import CalendarYear from './calendar-year'
import iconCode from '../icon/code'

const _privateData = new WeakMap()

class Calendar extends StyledElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      selected: { type: Date, reflect: true },
      today: { type: Date, reflect: true },
      currentYear: { type: Number, reflect: true },
      currentMonth: { type: Number, reflect: true },
      firstDayOfTheWeek: { type: Number, reflect: true },
      goToday: { type: String, reflect: true },
      days: { type: Array },
      months: { type: Array },
      view: { type: String, reflect: true }
    }
  }

  get selected () {
    return _privateData.get(this).days.selected
  }

  set selected (value) {
    _privateData.get(this).days.selected = value
    if (value) {
      this.currentMonth = value.getMonth()
      this.currentYear = value.getFullYear()
    }
    this.requestUpdate()
  }

  get view () {
    return _privateData.get(this).currentView
  }

  constructor () {
    super()

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

    this.today = new Date()
    this.currentYear = new Date().getFullYear()
    this.currentMonth = new Date().getMonth()
    this.firstDayOfTheWeek = 1
    this.goToday = ''

    _privateData.set(this, {
      days: new CalendarDay(this),
      months: new CalendarMonth(this),
      years: new CalendarYear(this),
      currentView: 'day'
    })
  }

  selectCurrentMonth (month, year) {
    const oldMonth = this.currentMonth
    const oldYear = this.currentYear
    this.currentMonth = month
    this.currentYear = year
    this.dispatchEvent(
      new CustomEvent('change:currentMonth', {
        detail: { month, year, oldMonth, oldYear }
      })
    )
    this.requestUpdate()
  }

  setView (view) {
    const data = _privateData.get(this)
    if (
      view !== data.currentView &&
      (view === 'day' || view === 'month' || view === 'year')
    ) {
      const oldView = data.currentView
      data.currentView = view
      data.months.year = this.currentYear
      data.years.year = this.currentYear
      this.dispatchEvent(
        new CustomEvent('change:currentView', {
          detail: { view, oldView }
        })
      )
      this.requestUpdate()
    }
  }

  getCurrentViewObject () {
    const { currentView, days, months, years } = _privateData.get(this)
    switch (currentView) {
      case 'day':
        return days
      case 'month':
        return months
      case 'year':
        return years
    }
  }

  handleGoToday () {
    const { months, years } = _privateData.get(this)
    const oldMonth = this.currentMonth
    const oldYear = this.currentYear
    const month = this.today.getMonth()
    const year = this.today.getFullYear()
    this.currentMonth = month
    this.currentYear = year
    months.year = this.currentYear
    years.year = this.currentYear
    this.requestUpdate()
    this.dispatchEvent(
      new CustomEvent('change:currentMonth', {
        detail: { month, year, oldMonth, oldYear }
      })
    )
  }

  render () {
    const viewObject = this.getCurrentViewObject()
    return html`
      <div id="root" class="${this.goToday ? 'showGoToday' : ''}">
        <div id="header">
          <div id="title">${viewObject.renderTitle()}</div>
          <div id="titleComponents">
            <div id="navContainer">
              <button id="prev" @click="${() => viewObject.navigate(-1)}">
                <i>${iconCode.Up}</i>
              </button>
              <button id="next" @click="${() => viewObject.navigate(1)}">
                <i>${iconCode.Down}</i>
              </button>
            </div>
          </div>
        </div>
        ${viewObject.renderBody()}
        ${this.goToday
          ? html`
              <button id="goToday" @click="${this.handleGoToday}">
                ${this.goToday}
              </button>
            `
          : nothing}
      </div>
    `
  }
}

customElements.define('fluent-calendar', Calendar)

export default Calendar

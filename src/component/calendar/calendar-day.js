import { html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'

function areSameDay (date1, date2) {
  return (
    date1 &&
    date2 &&
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

export default class CalendarDay {
  constructor (calendar) {
    this.calendar = calendar
    this.selected = null
  }

  get currentMonth () {
    return this.calendar.currentMonth
  }

  get currentYear () {
    return this.calendar.currentYear
  }

  get currentMonthName () {
    const { currentMonth, months } = this.calendar
    return months[currentMonth]
  }

  get sortedDays () {
    const { days, firstDayOfTheWeek } = this.calendar
    return [
      ...days.slice(firstDayOfTheWeek),
      ...days.slice(0, firstDayOfTheWeek)
    ]
  }

  getMonthWeeks () {
    const { currentMonth, currentYear } = this
    const currentDate = new Date(currentYear, currentMonth, 1)

    while (currentDate.getDay() !== this.calendar.firstDayOfTheWeek) {
      currentDate.setDate(currentDate.getDate() - 1)
    }

    const weeks = []

    while (true) {
      const week = []
      let someDayInCurrentMonth = false

      for (let day = 0; day < 7; day += 1) {
        someDayInCurrentMonth |= currentDate.getMonth() === currentMonth
        week.push(new Date(currentDate.getTime()))
        currentDate.setDate(currentDate.getDate() + 1)
      }

      if (someDayInCurrentMonth) {
        weeks.push(week)
      } else {
        break
      }
    }

    return weeks
  }

  handleClickDay (day) {
    const month = day.getMonth()
    if (month === this.currentMonth) {
      if (!areSameDay(day, this.selected)) {
        const oldDay = this.selected
        this.selected = day
        this.calendar.dispatchEvent(
          new CustomEvent('change', {
            detail: { value: day, oldValue: oldDay }
          })
        )
        this.calendar.requestUpdate()
      }
    } else {
      const year = day.getFullYear()
      this.calendar.selectCurrentMonth(month, year)
    }
  }

  navigate (offset) {
    let month = this.currentMonth + offset
    const year = this.currentYear + Math.floor(month / 12)

    while (month < 0) month += 12
    month %= 12

    this.calendar.selectCurrentMonth(month, year)
  }

  renderTitle () {
    return html`
      <div>
        <span @click="${() => this.calendar.setView('month')}">
          ${this.currentMonthName}
        </span>
        <span>&nbsp;</span>
        <span @click="${() => this.calendar.setView('year')}">
          ${this.currentYear}
        </span>
      </div>
    `
  }

  renderBody () {
    return html`
      <table>
        <thead id="weekday">
          <tr>
            ${this.sortedDays.map(day => html`<th>${day}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.getMonthWeeks().map(
            week => html`
              <tr>
                ${week.map(
                  day => html`
                    <td
                      class="${classMap({
                        day: true,
                        today: areSameDay(day, this.calendar.today),
                        otherMonth: day.getMonth() !== this.currentMonth,
                        selected: areSameDay(day, this.calendar.selected)
                      })}"
                    >
                      <button @click="${() => this.handleClickDay(day)}">
                        <span>${day.getDate()}</span>
                      </button>
                    </td>
                  `
                )}
              </tr>
            `
          )}
        </tbody>
      </table>
    `
  }
}

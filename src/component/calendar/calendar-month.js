import { html } from 'lit-element'

export default class CalendarMonth {
  constructor (calendar) {
    this.calendar = calendar
    this.year = calendar.currentYear
  }

  getMonthRows () {
    const { months } = this.calendar
    const rows = []
    for (let index = 0; index < months.length; index++) {
      const row = Math.floor(index / 4)
      const isFirstCell = index % 4 === 0
      if (isFirstCell) {
        rows.push([])
      }
      rows[row].push({
        number: index,
        name: months[index].substr(0, 3)
      })
    }
    return rows
  }

  navigate (offset) {
    this.year += offset
    this.calendar.requestUpdate()
  }

  handleClick (month) {
    this.calendar.selectCurrentMonth(month, this.year)
    this.calendar.setView('day')
  }

  renderTitle () {
    return html`
      <div @click="${() => this.calendar.setView('day')}">${this.year}</div>
    `
  }

  renderBody () {
    return html`
      <div id="monthsGrid">
        ${this.getMonthRows().map(
          row => html`
            <div>
              ${row.map(
                ({ number, name }) => html`
                  <button
                    class="${this.year === this.calendar.currentYear &&
                    number === this.calendar.currentMonth
                      ? 'selected'
                      : ''}"
                    @click="${() => this.handleClick(number)}"
                  >
                    ${name}
                  </button>
                `
              )}
            </div>
          `
        )}
      </div>
    `
  }
}

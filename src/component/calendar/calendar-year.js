import { html } from 'lit-element'

export default class CalendarYear {
  constructor (calendar) {
    this.calendar = calendar
    this.year = calendar.currentYear
  }

  getYearRows () {
    const rows = []
    for (let index = 0; index < 12; index++) {
      const row = Math.floor(index / 4)
      const isFirstCell = index % 4 === 0
      if (isFirstCell) {
        rows.push([])
      }
      rows[row].push(this.year + index)
    }
    return rows
  }

  navigate (offset) {
    this.year += offset * 12
    this.calendar.requestUpdate()
  }

  handleClick (year) {
    this.calendar.selectCurrentMonth(this.calendar.currentMonth, year)
    this.calendar.setView('day')
  }

  renderTitle () {
    return html`
      <div @click="${() => this.calendar.setView('day')}">
        ${this.year} - ${this.year + 11}
      </div>
    `
  }

  renderBody () {
    return html`
      <div id="monthsGrid">
        ${this.getYearRows().map(
          row => html`
            <div>
              ${row.map(
                year => html`
                  <button
                    class="${year === this.calendar.currentYear
                      ? 'selected'
                      : ''}"
                    @click="${() => this.handleClick(year)}"
                  >
                    ${year.toString()}
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

import { LitElement, html } from 'lit-element'
import { nothing } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import defineStyleSheetProperty from '../../utils/style-sheet-property'
import styles from './pivot.css'
import iconCode from '../icon/code'

class Pivot extends LitElement {
  static get styles () {
    return styles
  }

  static get properties () {
    return {
      selectedTab: { type: Number, reflect: true },
      tabs: { type: Array, reflect: true },
      large: { type: Boolean, reflect: true },
      tabStyle: { type: Boolean, reflect: true },
      value: { type: String, reflect: true }
    }
  }

  constructor () {
    super()
    this.selectedTab = -1
    this.tabs = []
    this.large = false
    this.tabStyle = false
  }

  get value () {
    return this.selectedTab in this.tabs
      ? this.tabs[this.selectedTab].value
      : null
  }

  set value (value) {
    this.selectedTab =
      value == null ? -1 : this.tabs.findIndex(tab => tab.value === value)
  }

  handleClick (index) {
    if (this.selectedTab !== index) {
      const oldValue = (this.tabs[this.selectedTab] ?? {}).value
      const value = (this.tabs[index] ?? {}).value
      this.selectedTab = index
      this.dispatchEvent(
        new CustomEvent('change', { detail: { value, oldValue } })
      )
    }
  }

  render () {
    return html`
      <div id="root">
        ${this.tabs.map(
          (tab, index) => html`
            <button
              class="${classMap({ selected: this.selectedTab === index })}"
              @click="${() => this.handleClick(index)}"
            >
              <span>
                <span>
                  ${tab.icon
                    ? html`<span class="icon"
                        ><i>${iconCode[tab.icon]}</i></span
                      >`
                    : nothing}
                  <span class="label"> ${tab.text} </span>
                  ${tab.count != null
                    ? html`<span class="count">(${tab.count.toString()})</span>`
                    : nothing}
                </span>
              </span>
            </button>
          `
        )}
      </div>
    `
  }
}

defineStyleSheetProperty(Pivot)

customElements.define('fluent-pivot', Pivot)

export default Pivot

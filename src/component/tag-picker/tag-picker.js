import { html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import ComboElement from '../../part/combo-element'
import debounce from '../../utils/debounce'
import styles from './tag-picker.css'
import itemStyles from './item.css'
import iconCode from '../icon/code'
import '../autofill'
import '../select'

const _privateData = new WeakMap()

class TagPicker extends ComboElement {
  static get styles () {
    return [ComboElement.styles, styles, itemStyles]
  }

  static get properties () {
    return {
      ...ComboElement.properties,
      placeholder: { type: String, reflect: true },
      getItems: { type: Function },
      getItemsRate: { type: Number },
      filterItems: { type: Boolean, reflect: true },
      accentInsensitive: { type: Boolean, reflect: true },
      maxSelectedItems: { type: Number, reflect: true },
      value: { type: Array, reflect: true },
      loadingText: { type: String, reflect: true }
    }
  }

  constructor () {
    super()
    this.placeholder = ''
    this.getItems = null
    this.getItemsRate = 0
    this.filterItems = false
    this.accentInsensitive = false
    this.maxSelectedItems = -1
    this.loadingText = 'Carregant'
    _privateData.set(this, {
      selectedItems: [],
      areItemsLoaded: false
    })
    this.addEventListener('focusout', () => this.closeSuggestions())
  }

  get value () {
    return Array.from(_privateData.get(this).selectedItems)
  }

  set value (value) {
    _privateData.get(this).selectedItems = Array.from(value)
    this.requestUpdate()
  }

  selectItem (index) {
    const data = _privateData.get(this)
    if (
      this.maxSelectedItems < 0 ||
      data.selectedItems.length < this.maxSelectedItems
    ) {
      const select = this.renderRoot.querySelector('fluent-select')
      const item = select.options[index]
      if (item && !this.isItemSelected(item)) {
        data.selectedItems.push(item)
      }
    }
    this.closeSuggestions()
  }

  closeSuggestions () {
    const data = _privateData.get(this)
    const select = this.renderRoot.querySelector('fluent-select')
    const autofill = this.renderRoot.querySelector('fluent-autofill')
    autofill.value = ''
    autofill.suggestedValue = ''
    select.scrollToTop()
    select.options = []
    select.value = []
    this.open = false
    data.areItemsLoaded = false
    this.requestUpdate()
  }

  isItemSelected (item) {
    const data = _privateData.get(this)
    return data.selectedItems.find(
      selected => item.value === selected.value && item.text === selected.text
    )
  }

  setSuggestions (items) {
    const data = _privateData.get(this)
    const select = this.renderRoot.querySelector('fluent-select')
    const autofill = this.renderRoot.querySelector('fluent-autofill')
    select.options = this.filterItems
      ? items.filter(item => !this.isItemSelected(item))
      : items
    if (select.options && select.options.length > 0) {
      select.highlightedIndex = 0
      autofill.suggestedValue = select.options[0].text
    }
    data.areItemsLoaded = true
    this.requestUpdate()
  }

  labelClick (event) {
    event.stopPropagation()
    this.renderRoot.querySelector('fluent-autofill').focus()
  }

  dispatchChange (oldSelectedItems) {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          selectedItems: [..._privateData.get(this).selectedItems],
          oldSelectedItems
        }
      })
    )
  }

  handleInput (event) {
    event.stopPropagation()
    const value = event.detail
    if (!value) {
      this.closeSuggestions()
    } else if (this.getItems) {
      this.open = true
      _privateData.get(this).areItemsLoaded = false
      this.getItems(value).then(items => this.setSuggestions(items))
    }
    this.requestUpdate()
  }

  handleNavigate (event) {
    const select = this.renderRoot.querySelector('fluent-select')
    const autofill = this.renderRoot.querySelector('fluent-autofill')
    select.highlightedIndex =
      (select.options.length + select.highlightedIndex + event.detail) %
      select.options.length
    setImmediate(() => select.scrollToElement(select.highlightedIndex))
    autofill.suggestedValue = select.options[select.highlightedIndex].text
  }

  handleSelect () {
    const oldSelectedItems = [..._privateData.get(this).selectedItems]
    const select = this.renderRoot.querySelector('fluent-select')
    this.selectItem(select.highlightedIndex)
    this.dispatchChange(oldSelectedItems)
  }

  handleRemove () {
    const { selectedItems } = _privateData.get(this)
    const oldSelectedItems = [...selectedItems]
    selectedItems.pop()
    this.dispatchChange(oldSelectedItems)
    this.requestUpdate()
  }

  handleRemoveItem (index) {
    const { selectedItems } = _privateData.get(this)
    const oldSelectedItems = [...selectedItems]
    selectedItems.splice(index, 1)
    this.renderRoot.querySelector('fluent-autofill').focus()
    this.dispatchChange(oldSelectedItems)
    this.requestUpdate()
  }

  handleSelectChange (event) {
    const oldSelectedItems = [..._privateData.get(this).selectedItems]
    this.selectItem(event.detail.selectedIndices[0])
    this.dispatchChange(oldSelectedItems)
    this.renderRoot.querySelector('fluent-autofill').focus()
  }

  renderInputField () {
    const { selectedItems } = _privateData.get(this)
    const maxItemsReached =
      this.maxSelectedItems > -1 &&
      selectedItems.length >= this.maxSelectedItems
    const placeholder =
      !maxItemsReached || selectedItems.length === 0 ? this.placeholder : ''
    return html`
      <div id="field">
        ${selectedItems.length > 0
          ? html`
              <span id="itemsWrapper">
                ${selectedItems.map(
                  (item, index) => html`
                    <div class="item" tabindex="0">
                      <span>${item.text}</span>
                      <button
                        tabindex="-1"
                        @click="${() => this.handleRemoveItem(index)}"
                      >
                        <span>
                          <i>${iconCode.Cancel}</i>
                        </span>
                      </button>
                    </div>
                  `
                )}
              </span>
            `
          : undefined}
        <fluent-autofill
          autofill
          .placeholder="${placeholder}"
          .disabled="${this.disabled}"
          .accentInsensitive="${this.accentInsensitive}"
          @input="${debounce(this.handleInput, this.getItemsRate, this)}"
          @navigate="${this.handleNavigate}"
          @select="${this.handleSelect}"
          @remove="${this.handleRemove}"
          @blur="${this.handleAutofillBlur}"
          @focus="${this.handleAutofillFocus}"
        ></fluent-autofill>
      </div>
    `
  }

  renderDropdown () {
    const { areItemsLoaded } = _privateData.get(this)
    return html`
      <div id="items" class="${classMap({ loading: !areItemsLoaded })}">
        <div id="spinner">
          <div id="circle"></div>
          ${this.loadingText
            ? html`<div id="loadingText">${this.loadingText}</div>`
            : undefined}
        </div>
        <fluent-select
          maxHeight="200px"
          @change="${this.handleSelectChange}"
        ></fluent-select>
      </div>
    `
  }
}

customElements.define('fluent-tag-picker', TagPicker)

export default TagPicker

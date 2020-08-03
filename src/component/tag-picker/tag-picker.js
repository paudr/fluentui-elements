import { html, nothing } from 'lit-html'
import { classMap } from 'lit-html/directives/class-map'
import StyledElement from '../../utils/styled-element'
import debounce from '../../utils/debounce'
import styles from './tag-picker.css'
import itemStyles from './item.css'
import iconCode from '../icon/code'
import '../autofill'
import '../select'

const _privateData = new WeakMap()

class TagPicker extends StyledElement {
  static get styles () {
    return [styles, itemStyles]
  }

  static get properties () {
    return {
      label: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      required: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      getItems: { type: Function },
      getItemsRate: { type: Number },
      filterItems: { type: Boolean, reflect: true },
      accentInsensitive: { type: Boolean, reflect: true },
      errorMessage: { type: String, reflect: true },
      maxSelectedItems: { type: Number, reflect: true },
      value: { type: Array, reflect: true },
      loadingText: { type: String, reflect: true },
      open: { type: Boolean }
    }
  }

  constructor () {
    super()

    this.label = ''
    this.placeholder = ''
    this.required = false
    this.disabled = false
    this.getItems = null
    this.getItemsRate = 0
    this.filterItems = false
    this.accentInsensitive = false
    this.errorMessage = ''
    this.maxSelectedItems = -1
    this.loadingText = 'Carregant'
    this.open = false
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
      const select = this.shadowRoot.querySelector('fluent-select')
      const item = select.options[index]
      if (item && !this.isItemSelected(item)) {
        data.selectedItems.push(item)
      }
    }
    this.closeSuggestions()
  }

  closeSuggestions () {
    const data = _privateData.get(this)
    const select = this.shadowRoot.querySelector('fluent-select')
    const autofill = this.shadowRoot.querySelector('fluent-autofill')
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
    const select = this.shadowRoot.querySelector('fluent-select')
    const autofill = this.shadowRoot.querySelector('fluent-autofill')
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

  handleLabelClick (event) {
    event.stopPropagation()
    this.shadowRoot.querySelector('fluent-autofill').focus()
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
    const select = this.shadowRoot.querySelector('fluent-select')
    const autofill = this.shadowRoot.querySelector('fluent-autofill')
    select.highlightedIndex =
      (select.options.length + select.highlightedIndex + event.detail) %
      select.options.length
    setImmediate(() => select.scrollToElement(select.highlightedIndex))
    autofill.suggestedValue = select.options[select.highlightedIndex].text
  }

  handleSelect () {
    const select = this.shadowRoot.querySelector('fluent-select')
    this.selectItem(select.highlightedIndex)
  }

  handleRemove () {
    _privateData.get(this).selectedItems.pop()
    this.requestUpdate()
  }

  handleRemoveItem (index) {
    _privateData.get(this).selectedItems.splice(index, 1)
    this.shadowRoot.querySelector('fluent-autofill').focus()
    this.requestUpdate()
  }

  handleSelectChange (event) {
    this.selectItem(event.detail.selectedIndices[0])
    this.shadowRoot.querySelector('fluent-autofill').focus()
  }

  render () {
    const { selectedItems, areItemsLoaded } = _privateData.get(this)
    const maxItemsReached =
      this.maxSelectedItems > -1 &&
      selectedItems.length >= this.maxSelectedItems
    const placeholder =
      !maxItemsReached || selectedItems.length === 0 ? this.placeholder : ''
    return html`
      ${this.label
        ? html`<label @click="${this.handleLabelClick}">${this.label}</label>`
        : nothing}
      <div
        id="container"
        class="${classMap({
          open: this.open,
          invalid: this.errorMessage
        })}"
      >
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
            : nothing}
          <fluent-autofill
            autofill
            .placeholder="${placeholder}"
            .disabled="${this.disabled}"
            .accentInsensitive="${this.accentInsensitive}"
            @input="${debounce(this.handleInput, this.getItemsRate)}"
            @navigate="${this.handleNavigate}"
            @select="${this.handleSelect}"
            @remove="${this.handleRemove}"
            @blur="${this.handleAutofillBlur}"
            @focus="${this.handleAutofillFocus}"
          ></fluent-autofill>
        </div>
        <div id="items" class="${classMap({ loading: !areItemsLoaded })}">
          <div id="spinner">
            <div id="circle"></div>
            ${this.loadingText
              ? html`<div id="loadingText">${this.loadingText}</div>`
              : nothing}
          </div>
          <fluent-select
            maxHeight="200px"
            @change="${this.handleSelectChange}"
          ></fluent-select>
        </div>
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

customElements.define('fluent-tag-picker', TagPicker)

export default TagPicker

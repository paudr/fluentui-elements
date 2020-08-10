import { html } from 'lit-html'
import ComboElement from '../../base/combo-element'
import OptionsManager from '../../utils/options-manager'
import { startsWith, equalInsensitive } from '../../utils/text'
import styles from './combo-box.css'
import iconCode from '../icon/code'
import '../autofill'
import '../select'

const _optionsManager = new WeakMap()

class ComboBox extends ComboElement {
  static get styles () {
    return [ComboElement.styles, styles]
  }

  static get properties () {
    return {
      ...ComboElement.properties,
      options: { type: Array, reflect: true },
      value: { type: Object, reflect: true },
      readOnly: { type: Boolean, reflect: true },
      multiple: { type: Boolean, reflect: true },
      allowFreeform: { type: Boolean, reflect: true },
      autoComplete: { type: Boolean, reflect: true },
      accentInsensitive: { type: Boolean, reflect: true },
      placeholder: { type: String, reflect: true }
    }
  }

  constructor () {
    super()
    this.readOnly = false
    this.allowFreeform = false
    this.autoComplete = false
    this.accentInsensitive = false
    this.selectedIndex = null
    this.suggestedIndex = null
    _optionsManager.set(this, new OptionsManager())
    this.addEventListener('blur', () => {
      this.closeOptions()
    })
  }

  get options () {
    return _optionsManager.get(this).options
  }

  set options (value) {
    const optionsManager = _optionsManager.get(this)
    const oldValue = optionsManager.options
    optionsManager.options = value
    this.requestUpdate('options', oldValue)
  }

  get value () {
    return _optionsManager.get(this).value
  }

  set value (value) {
    const optionsManager = _optionsManager.get(this)
    const oldValue = optionsManager.value
    optionsManager.value = value
    this.requestUpdate('value', oldValue)
  }

  get multiple () {
    return _optionsManager.get(this).multiple
  }

  set multiple (value) {
    const optionsManager = _optionsManager.get(this)
    const oldValue = optionsManager.multiple
    optionsManager.multiple = value
    this.requestUpdate('multiple', oldValue)
  }

  get selectedIndices () {
    return Array.from(_optionsManager.get(this).selectedIndices)
  }

  closeOptions () {
    const select = this.renderRoot.querySelector('fluent-select')
    const autofill = this.renderRoot.querySelector('fluent-autofill')
    const optionsManager = _optionsManager.get(this)
    if (!this.multiple) {
      if (autofill.value === '') {
        select.selectIndex(null, true)
      } else if (
        select.highlightedIndex > -1 &&
        select.selectedIndices[0] !== select.highlightedIndex
      ) {
        select.selectIndex(select.highlightedIndex, true)
      }
    }
    this.open = false
    select.markedIndex = -1
    select.highlightedIndex = -1
    autofill.value = this.allowFreeform
      ? this.multiple
        ? ''
        : optionsManager.getSelectedText('')
      : optionsManager.getSelectedText('')
    this.requestUpdate()
  }

  labelClick (event) {
    event.stopPropagation()
    if (!this.disabled) {
      this.renderRoot.querySelector('fluent-autofill').focus()
    }
  }

  handleCaretClick () {
    if (!this.disabled && !this.readOnly) {
      const select = this.renderRoot.querySelector('fluent-select')
      this.open = !this.open
      if (this.open) {
        this.open = true
        const autofill = this.renderRoot.querySelector('fluent-autofill')
        autofill.focus()
        if (select.markedIndex >= 0) {
          setImmediate(() => select.scrollToElement(select.markedIndex))
        }
      } else {
        if (select.markedIndex > -1) {
          if (this.multiple) {
            if (!select.selectedIndices.includes(select.markedIndex)) {
              select.toggleIndex(select.markedIndex, true)
            }
          } else {
            select.selectIndex(select.markedIndex, true)
          }
        }
      }
    }
  }

  handleSelectChange (event) {
    const { selectedIndices } = event.detail
    const select = event.target
    const autofill = this.renderRoot.querySelector('fluent-autofill')
    const optionsManager = _optionsManager.get(this)
    const oldValue = this.value
    const oldSelectedIndices = optionsManager.selectedIndices
    optionsManager.selectedIndices = Array.from(selectedIndices)
    if (!this.multiple) {
      autofill.write(this.value ?? '')
      this.open = false
    } else {
      autofill.write('')
    }
    select.markedIndex = -1
    select.highlightedIndex = -1
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          value: this.value,
          oldValue,
          selectedIndices,
          oldSelectedIndices
        }
      })
    )
    this.requestUpdate()
  }

  handleAutofillClick (event) {
    if (!this.disabled && !this.readOnly && !this.allowFreeform) {
      this.open = !this.open
    }
  }

  handleAutofillInput (event) {
    event.stopPropagation()
    const select = this.renderRoot.querySelector('fluent-select')
    const equalIndex = this.options.findIndex(option =>
      equalInsensitive(option.text, event.detail, this.accentInsensitive)
    )
    select.highlightedIndex = equalIndex
    if (this.autoComplete) {
      if (this.multiple) {
        this.open = true
      }
      if (!this.open && !this.multiple && equalIndex > 1) {
        select.selectIndex(equalIndex, true)
      } else {
        const startIndex = this.options.findIndex(option =>
          startsWith(option.text, event.detail, this.accentInsensitive)
        )
        if (startIndex > -1) {
          const autofill = event.target
          autofill.suggestedValue = this.options[startIndex].text
          select.markedIndex = startIndex
          setImmediate(() => select.scrollToElement(startIndex))
        } else {
          select.markedIndex = -1
        }
      }
    } else if (equalIndex > -1) {
      setImmediate(() => select.scrollToElement(equalIndex))
    }
  }

  handleAutofillNavigate (event) {
    const autofill = event.target
    const select = this.renderRoot.querySelector('fluent-select')
    if (!this.multiple && !this.open && !this.autoComplete) {
      const equalIndex = this.options.findIndex(option =>
        equalInsensitive(option.text, autofill.value, this.accentInsensitive)
      )
      const index = select.getNextOptionIndex(
        equalIndex > -1 ? equalIndex : select.selectedIndices[0],
        event.detail
      )
      select.selectIndex(index, true)
      autofill.selectAllText()
    } else {
      if (this.autoComplete) {
        select.markNextOption(event.detail)
        autofill.suggest(select.options[select.markedIndex].text)
        setImmediate(() => select.scrollToElement(select.markedIndex))
      } else {
        select.highlightedIndex = select.getNextOptionIndex(
          select.highlightedIndex,
          event.detail
        )
        autofill.suggest(select.options[select.highlightedIndex].text, true)
        setImmediate(() => select.scrollToElement(select.highlightedIndex))
      }
    }
  }

  handleAutofillSelect (event) {
    const select = this.renderRoot.querySelector('fluent-select')
    const index = this.autoComplete
      ? select.markedIndex
      : select.highlightedIndex
    if (this.multiple) {
      event.target.value = ''
      select.toggleIndex(index, true)
    } else {
      select.selectIndex(index, true)
    }
  }

  renderInputField () {
    const optionsManager = _optionsManager.get(this)
    const autofillValue = this.allowFreeform
      ? this.multiple
        ? ''
        : optionsManager.getSelectedText('')
      : optionsManager.getSelectedText('')
    const autofillPlaceholder =
      this.multiple && optionsManager.selectedIndices.length > 0
        ? optionsManager.value.join(', ')
        : this.placeholder
    return html`
      <div id="title">
        <fluent-autofill
          autofill
          .value="${autofillValue}"
          .placeholder="${autofillPlaceholder}"
          .disabled="${this.disabled}"
          .readOnly="${!this.allowFreeform}"
          .accentInsensitive="${this.accentInsensitive}"
          @click="${this.handleAutofillClick}"
          @input="${this.handleAutofillInput}"
          @navigate="${this.handleAutofillNavigate}"
          @select="${this.handleAutofillSelect}"
          @escape="${this.closeOptions}"
        ></fluent-autofill>
      </div>
      <button
        id="caret"
        .disabled="${this.disabled}"
        @click="${this.handleCaretClick}"
      >
        <span>
          <i>${iconCode.ChevronDown}</i>
        </span>
      </button>
    `
  }

  renderDropdown () {
    return html`
      <fluent-select
        .options="${this.options}"
        .multiple="${this.multiple}"
        .value="${this.value}"
        maxHeight="200px"
        @change="${this.handleSelectChange}"
      ></fluent-select>
    `
  }
}

customElements.define('fluent-combo-box', ComboBox)

export default ComboBox

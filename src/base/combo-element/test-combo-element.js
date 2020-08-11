import { html, css } from 'lit-element'
import ComboElement from './combo-element'
import { normalize } from '../../theme/mixins.css'
import { blackTranslucent40, neutralLight } from '../../theme/color.css'

class TestComboElement extends ComboElement {
  static get styles () {
    return [
      ComboElement.styles,
      css`
        #field {
          flex: 1 1 0px;
          border: 0;
          background-color: rgba(113, 175, 229, 0.4);
          outline: 0;
        }

        :host([disabled]) #field,
        :host([disabled]) #content {
          background-color: transparent;
        }

        #content {
          ${normalize}
          flex: 1 1 0px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 178, 148, 0.4);
          box-shadow: 0 0px 15px -5px ${blackTranslucent40};
          border: 1px solid ${neutralLight};
        }
      `
    ]
  }

  static get properties () {
    return {
      ...ComboElement.properties
    }
  }

  static get fieldId () {
    return 'field'
  }

  keydown (event) {
    if (event.code === 'Enter') this.open = !this.open
  }

  renderInputField () {
    return html`<div
      id="${TestComboElement.fieldId}"
      tabindex="0"
      @keydown="${this.keydown}"
    ></div>`
  }

  renderDropdown () {
    return html`<div id="content">Content</div>`
  }
}

customElements.define('test-combo-element', TestComboElement)

export default TestComboElement

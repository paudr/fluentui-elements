import { html, css } from 'lit-element'
import InputElement from './input-element'

class TestInputElement extends InputElement {
  static get styles () {
    return [
      InputElement.styles,
      css`
        #field {
          flex: 1 1 0px;
          border: 0;
          background-color: rgba(113, 175, 229, 0.4);
          outline: 0;
        }

        :host([disabled]) #field {
          background-color: transparent;
        }
      `
    ]
  }

  static get properties () {
    return {
      ...InputElement.properties
    }
  }

  static get fieldId () {
    return 'field'
  }

  renderInputField () {
    return html`<div id="${TestInputElement.fieldId}" tabindex="0"></div>`
  }
}

customElements.define('test-input-element', TestInputElement)

export default TestInputElement

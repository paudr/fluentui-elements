import { html } from 'lit-html'
import './test-combo-element'

export default {
  title: 'Base/ComboElement/Underlined',
  component: 'test-combo-element'
}

export const Normal = () => html`
  <test-combo-element underlined label="Standard"></test-combo-element>
`

export const WithDescription = () => html`
  <test-combo-element
    underlined
    label="Standard"
    description="A fancy description."
  ></test-combo-element>
`

export const Invalid = () => html`
  <test-combo-element underlined invalid label="Invalid"></test-combo-element>
`

export const WithErrorMessage = () => html`
  <test-combo-element
    underlined
    label="With error message"
    errorMessage="Error message"
  ></test-combo-element>
`

export const Disabled = () => html`
  <test-combo-element underlined disabled label="Disabled"></test-combo-element>
`

export const Required = () => html`
  <style>
    test-combo-element {
      width: 250px;
    }
  </style>
  <p>
    <test-combo-element
      underlined
      required
      label="Required"
    ></test-combo-element>
  </p>
  <p>
    <test-combo-element underlined required multiple></test-combo-element>
  </p>
`

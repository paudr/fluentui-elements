import { html } from 'lit-html'
import './test-input-element'

export default {
  title: 'Base/InputElement/Underlined',
  component: 'test-input-element'
}

export const Normal = () => html`
  <test-input-element underlined label="Standard"></test-input-element>
`

export const WithDescription = () => html`
  <test-input-element
    underlined
    label="Standard"
    description="A fancy description."
  ></test-input-element>
`

export const Invalid = () => html`
  <test-input-element underlined invalid label="Invalid"></test-input-element>
`

export const WithErrorMessage = () => html`
  <test-input-element
    underlined
    label="With error message"
    errorMessage="Error message"
  ></test-input-element>
`

export const Disabled = () => html`
  <test-input-element underlined disabled label="Disabled"></test-input-element>
`

export const Required = () => html`
  <style>
    test-input-element {
      width: 250px;
    }
  </style>
  <p>
    <test-input-element
      underlined
      required
      label="Required"
    ></test-input-element>
  </p>
  <p>
    <test-input-element underlined required multiple></test-input-element>
  </p>
`

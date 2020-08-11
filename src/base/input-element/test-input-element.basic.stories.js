import { html } from 'lit-html'
import './test-input-element'

export default {
  title: 'Base/InputElement/Basic',
  component: 'test-input-element'
}

export const Normal = () => html`
  <test-input-element label="Standard"></test-input-element>
`

export const WithDescription = () => html`
  <test-input-element
    label="Standard"
    description="A fancy description."
  ></test-input-element>
`

export const Invalid = () => html`
  <test-input-element invalid label="Invalid"></test-input-element>
`

export const WithErrorMessage = () => html`
  <test-input-element
    label="With error message"
    errorMessage="Error message"
  ></test-input-element>
`

export const Disabled = () => html`
  <test-input-element disabled label="Disabled"></test-input-element>
`

export const Required = () => html`
  <style>
    test-input-element {
      width: 250px;
    }
  </style>
  <p>
    <test-input-element required label="Required"></test-input-element>
  </p>
  <p>
    <test-input-element required multiple></test-input-element>
  </p>
`

export const Borderless = () => html`
  <test-input-element borderless label="Borderless"></test-input-element>
`

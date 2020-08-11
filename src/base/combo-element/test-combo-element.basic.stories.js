import { html } from 'lit-html'
import './test-combo-element'

export default {
  title: 'Base/ComboElement/Basic',
  component: 'test-combo-element'
}

export const Normal = () => html`
  <test-combo-element label="Standard"></test-combo-element>
  <p>
    <span>Keys:</span><br />
    <span> - Enter: Toggle content</span><br />
  </p>
`

export const WithDescription = () => html`
  <test-combo-element
    label="Standard"
    description="A fancy description."
  ></test-combo-element>
`

export const Invalid = () => html`
  <test-combo-element invalid label="Invalid"></test-combo-element>
`

export const WithErrorMessage = () => html`
  <test-combo-element
    label="With error message"
    errorMessage="Error message"
  ></test-combo-element>
`

export const Disabled = () => html`
  <test-combo-element disabled label="Disabled"></test-combo-element>
`

export const Required = () => html`
  <style>
    test-combo-element {
      width: 250px;
    }
  </style>
  <p>
    <test-combo-element required label="Required"></test-combo-element>
  </p>
  <p>
    <test-combo-element required multiple></test-combo-element>
  </p>
`

export const Borderless = () => html`
  <test-combo-element borderless label="Borderless"></test-combo-element>
`

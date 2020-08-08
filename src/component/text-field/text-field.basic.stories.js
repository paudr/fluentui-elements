import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './text-field'

const container = story => html`
  <div
    tabindex="0"
    style="outline: 0"
    @keydown="${event => event.stopPropagation()}"
  >
    ${story()}
  </div>
`

export default {
  title: 'TextField/Basic',
  component: 'fluent-text-field',
  decorators: [container]
}

export const Normal = () => html`
  <fluent-text-field
    label="Standard"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithDescription = () => html`
  <fluent-text-field
    label="Standard"
    description="A fancy description."
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const Invalid = () => html`
  <fluent-text-field
    invalid
    label="Invalid"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithErrorMessage = () => html`
  <fluent-text-field
    label="With error message"
    errorMessage="Error message"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const Disabled = () => html`
  <fluent-text-field
    label="Disabled"
    value="I am disabled"
    disabled
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const Required = () => html`
  <style>
    fluent-text-field {
      width: 250px;
    }
  </style>
  <p>
    <fluent-text-field
      label="Required"
      required
      @focus="${action('focus')}"
      @blur="${action('blur')}"
      @input="${action('input')}"
      @change="${action('change')}"
    ></fluent-text-field>
  </p>
  <p>
    <fluent-text-field
      required
      @focus="${action('focus')}"
      @blur="${action('blur')}"
      @input="${action('input')}"
      @change="${action('change')}"
    ></fluent-text-field>
  </p>
`

export const ReadOnly = () => html`
  <fluent-text-field
    label="Read-only"
    value="I am read-only"
    readOnly
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const MaxLength = () => html`
  <fluent-text-field
    label="Max length (5)"
    maxlength="5"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithAnIcon = () => html`
  <fluent-text-field
    label="With an icon"
    icon="Calendar"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
    @click:icon="${action('click:icon')}"
  ></fluent-text-field>
`

export const WithPlaceholder = () => html`
  <fluent-text-field
    label="With placeholder"
    placeholder="Please enter text here"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const DisabledWithPlaceholder = () => html`
  <fluent-text-field
    label="Disabled with placeholder"
    placeholder="I am disabled"
    disabled
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const Borderless = () => html`
  <fluent-text-field
    borderless
    label="Borderless single-line TextField"
    placeholder="No borders here, forks."
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithPrefix = () => html`
  <fluent-text-field
    prefix="https://"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithPrefixDisabled = () => html`
  <fluent-text-field
    prefix="https://"
    disabled
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithSufix = () => html`
  <fluent-text-field
    sufix=".com"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

export const WithPrefixAndSufix = () => html`
  <fluent-text-field
    prefix="https://"
    sufix=".com"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

const styles = new CSSStyleSheet()
styles.replaceSync(`
  :host(:not([disabled]):not([underlined]):not([borderless])) #fieldGroup::after {
    border-top-color: red;
  }

  :host #label {
    color: #0078d4;
  }
`)

export const Styled = () => html`
  <fluent-text-field
    label="Standard"
    .styleSheet="${styles}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-text-field>
`

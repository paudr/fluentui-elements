import { html } from 'lit-html'
import {
  withKnobs,
  text,
  boolean,
  select,
  number
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './number-field'
import iconCode from '../icon/code'

const container = story => html`
  <div
    tabindex="0"
    @keydown="${event => event.stopPropagation()}"
    style="outline: 0"
  >
    ${story()}
  </div>
`

export default {
  title: 'NumberField',
  component: 'fluent-number-field',
  decorators: [container, withKnobs]
}

const iconOptions = Object.keys(iconCode).reduce(
  (object, name) => Object.assign(object, { [name]: name }),
  { None: '' }
)

const formatStyleOptions = {
  Decimal: 'decimal',
  Currency: 'currency',
  Percent: 'percent'
}

const minimumIntegerDigitsOptions = {
  min: 1,
  max: 21,
  step: 1
}

const fractionDigitsOptions = {
  min: 0,
  max: 20,
  step: 1
}

const significantDigitsOptions = {
  min: 0,
  max: 21,
  step: 1
}

const numberFieldGroupId = 'NumberField Properties'
const textFieldGroupId = 'TextField Properties'

export const Sandbox = () => html`
  <fluent-number-field
    .value="${number('value', '', {}, numberFieldGroupId)}"
    .text="${text('text', '', numberFieldGroupId)}"
    .formatStyle="${select(
      'formatStyle',
      formatStyleOptions,
      'decimal',
      numberFieldGroupId
    )}"
    .useGrouping="${boolean('useGrouping', false, numberFieldGroupId)}"
    .minimumIntegerDigits="${number(
      'minimumIntegerDigits',
      1,
      minimumIntegerDigitsOptions,
      numberFieldGroupId
    )}"
    .minimumFractionDigits="${number(
      'minimumFractionDigits',
      0,
      fractionDigitsOptions,
      numberFieldGroupId
    )}"
    .maximumFractionDigits="${number(
      'maximumFractionDigits',
      20,
      fractionDigitsOptions,
      numberFieldGroupId
    )}"
    .minimumSignificantDigits="${number(
      'minimumSignificantDigits',
      0,
      significantDigitsOptions,
      numberFieldGroupId
    )}"
    .maximumSignificantDigits="${number(
      'maximumSignificantDigits',
      0,
      significantDigitsOptions,
      numberFieldGroupId
    )}"
    .max="${number('max', -1, {}, numberFieldGroupId)}"
    .min="${number('min', -1, {}, numberFieldGroupId)}"
    .label="${text('label', 'Standard', textFieldGroupId)}"
    .description="${text('description', '', textFieldGroupId)}"
    .placeholder="${text(
      'placeholder',
      'Please enter text here',
      textFieldGroupId
    )}"
    .prefix="${text('prefix', '', textFieldGroupId)}"
    .sufix="${text('sufix', '', textFieldGroupId)}"
    .multiline="${boolean('multiline', false, textFieldGroupId)}"
    .underlined="${boolean('underlined', false, textFieldGroupId)}"
    .borderless="${boolean('borderless', false, textFieldGroupId)}"
    .icon="${select('icon', iconOptions, '', textFieldGroupId)}"
    .errorMessage="${text('errorMessage', '', textFieldGroupId)}"
    .disabled="${boolean('disabled', false, textFieldGroupId)}"
    .required="${boolean('required', false, textFieldGroupId)}"
    .readonly="${boolean('readonly', false, textFieldGroupId)}"
    .maxlength="${number('maxlength', -1, {}, textFieldGroupId)}"
    .unresizable="${boolean('unresizable', false, textFieldGroupId)}"
    .autoAdjustHeight="${boolean('autoAdjustHeight', false, textFieldGroupId)}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-number-field>
`
Sandbox.story = {
  parameters: {
    knobs: {
      timestamps: true,
      escapeHTML: false
    }
  }
}

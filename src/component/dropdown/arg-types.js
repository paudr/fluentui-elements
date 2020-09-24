import baseArgTypes from '../../base/combo-element/arg-types'

export default {
  ...baseArgTypes,
  options: {
    name: 'options',
    type: { name: 'object', required: false },
    defaultValue: [],
    control: {
      type: 'object'
    }
  },
  value: {
    name: 'value',
    type: { name: 'object', required: false },
    defaultValue: '',
    control: {
      type: 'object'
    }
  },
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  readonly: {
    name: 'readonly',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  multiple: {
    name: 'multiple',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  }
}

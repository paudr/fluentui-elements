import baseArgTypes from '../../base/input-element/arg-types'
import iconCode from '../icon/code'

export default {
  ...baseArgTypes,
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  prefix: {
    name: 'prefix',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  sufix: {
    name: 'sufix',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  multiline: {
    name: 'multiline',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  icon: {
    name: 'icon',
    type: { name: 'enum', required: false },
    defaultValue: null,
    control: {
      type: 'select',
      options: Object.keys(iconCode)
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
  maxlength: {
    name: 'maxlength',
    type: { name: 'number', required: false },
    defaultValue: null,
    control: {
      type: 'number',
      min: 0,
      step: 1
    }
  },
  unresizable: {
    name: 'unresizable',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  autoAdjustHeight: {
    name: 'autoAdjustHeight',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  value: {
    name: 'value',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  }
}

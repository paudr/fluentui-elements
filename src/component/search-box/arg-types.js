import baseArgTypes from '../../base/input-element/arg-types'
import iconCode from '../icon/code'

export default {
  ...baseArgTypes,
  icon: {
    name: 'icon',
    type: { name: 'enum', required: false },
    defaultValue: null,
    control: {
      type: 'select',
      options: ['', ...Object.keys(iconCode)]
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
  disableAnimation: {
    name: 'disableAnimation',
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

import baseArgTypes from '../../base/input-element/arg-types'
import iconCode from '../icon/code'

export default {
  ...baseArgTypes,
  icon: {
    name: 'icon',
    type: { name: 'enum', required: false },
    defaultValue: '',
    control: {
      type: 'select',
      options: Object.keys(iconCode)
    }
  },
  step: {
    name: 'step',
    type: { name: 'number', required: false },
    defaultValue: 1,
    control: {
      type: 'number',
      step: 1
    }
  },
  value: {
    name: 'value',
    type: { name: 'number', required: false },
    defaultValue: null,
    control: {
      type: 'number',
      step: 1
    }
  }
}

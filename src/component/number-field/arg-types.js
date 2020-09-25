import baseArgTypes from '../text-field/arg-types'

export default {
  ...baseArgTypes,
  formatStyle: {
    name: 'formatStyle',
    type: { name: 'enum', required: false },
    defaultValue: 'decimal',
    control: {
      type: 'inline-radio',
      options: ['decimal', 'currency', 'percent', 'action', 'command']
    }
  },
  useGrouping: {
    name: 'useGrouping',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  minimumIntegerDigits: {
    name: 'minimumIntegerDigits',
    type: { name: 'number', required: false },
    defaultValue: 1,
    control: {
      type: 'number',
      min: 1,
      max: 21,
      step: 1
    }
  },
  minimumFractionDigits: {
    name: 'minimumFractionDigits',
    type: { name: 'number', required: false },
    defaultValue: 0,
    control: {
      type: 'number',
      min: 0,
      max: 20,
      step: 1
    }
  },
  maximumFractionDigits: {
    name: 'maximumFractionDigits',
    type: { name: 'number', required: false },
    defaultValue: 20,
    control: {
      type: 'number',
      min: 0,
      max: 20,
      step: 1
    }
  },
  minimumSignificantDigits: {
    name: 'minimumSignificantDigits',
    type: { name: 'number', required: false },
    defaultValue: 0,
    control: {
      type: 'number',
      min: 0,
      max: 21,
      step: 1
    }
  },
  maximumSignificantDigits: {
    name: 'maximumSignificantDigits',
    type: { name: 'number', required: false },
    defaultValue: 0,
    control: {
      type: 'number',
      min: 0,
      max: 21,
      step: 1
    }
  },
  max: {
    name: 'max',
    type: { name: 'number', required: false },
    defaultValue: null,
    control: {
      type: 'number',
      min: 0,
      step: 1
    }
  },
  min: {
    name: 'max',
    type: { name: 'number', required: false },
    defaultValue: null,
    control: {
      type: 'number',
      min: 0,
      step: 1
    }
  },
  value: {
    name: 'value',
    type: { name: 'number', required: false },
    defaultValue: null,
    control: {
      type: 'number'
    }
  },
  text: {
    name: 'text',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  }
}

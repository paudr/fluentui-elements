import baseArgTypes from '../text-field/arg-types'

export default {
  ...baseArgTypes,
  formatStyle: {
    name: 'formatStyle',
    type: { name: 'enum', required: false },
    defaultValue: 'decimal',
    description: 'The number formatting style to use.',
    control: {
      type: 'select',
      options: ['decimal', 'currency', 'percent', 'unit']
    },
    table: {
      type: {
        summary: 'string (enum)',
        detail: '["decimal", "currency", "percent", "unit"]'
      },
      defaultValue: { summary: 'decimal' }
    }
  },
  useGrouping: {
    name: 'useGrouping',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  minimumIntegerDigits: {
    name: 'minimumIntegerDigits',
    type: { name: 'number', required: false },
    defaultValue: 1,
    description:
      'The minimum number of integer digits to use. Possible values are from 1 to 21.',
    control: {
      type: 'number',
      min: 1,
      max: 21,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 1 }
    }
  },
  minimumFractionDigits: {
    name: 'minimumFractionDigits',
    type: { name: 'number', required: false },
    defaultValue: 0,
    description: 'The minimum number of fraction digits to use.',
    control: {
      type: 'number',
      min: 0,
      max: 20,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 0 }
    }
  },
  maximumFractionDigits: {
    name: 'maximumFractionDigits',
    type: { name: 'number', required: false },
    defaultValue: 20,
    description: 'The maximum number of fraction digits to use.',
    control: {
      type: 'number',
      min: 0,
      max: 20,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 20 }
    }
  },
  minimumSignificantDigits: {
    name: 'minimumSignificantDigits',
    type: { name: 'number', required: false },
    defaultValue: 0,
    description: 'The maximum number of fraction digits to use.',
    control: {
      type: 'number',
      min: 0,
      max: 21,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 0 }
    }
  },
  maximumSignificantDigits: {
    name: 'maximumSignificantDigits',
    type: { name: 'number', required: false },
    defaultValue: 0,
    description: 'The maximum number of significant digits to use.',
    control: {
      type: 'number',
      min: 0,
      max: 21,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 0 }
    }
  },
  max: {
    name: 'max',
    type: { name: 'number', required: false },
    defaultValue: null,
    description: 'Maximum value',
    control: {
      type: 'number',
      min: 0,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: null }
    }
  },
  min: {
    name: 'max',
    type: { name: 'number', required: false },
    defaultValue: null,
    description: 'Minimum value',
    control: {
      type: 'number',
      min: 0,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: null }
    }
  },
  value: {
    name: 'value',
    type: { name: 'number', required: false },
    defaultValue: null,
    description: 'Current numeric value of the number field.',
    control: {
      type: 'number'
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: null }
    }
  },
  text: {
    name: 'text',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Current text value of the number field.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  }
}

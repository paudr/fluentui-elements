import baseArgTypes from '../../base/input-element/arg-types'

export default {
  ...baseArgTypes,
  step: {
    name: 'step',
    type: { name: 'number', required: false },
    defaultValue: 1,
    description: 'Difference between two adjacent values of the spint button.',
    control: {
      type: 'number',
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 1 }
    }
  },
  value: {
    name: 'value',
    type: { name: 'number', required: false },
    defaultValue: null,
    description: 'Current value of the spint button.',
    control: {
      type: 'number',
      step: 1
    },
    table: {
      type: { summary: 'number' }
    }
  },
  inc: {
    name: 'inc',
    type: { name: 'function', required: false },
    description: 'Function to calculate an step increment of the value.',
    table: {
      type: { summary: 'function' },
      defaultValue: { summary: 'value => value + step' }
    }
  },
  dec: {
    name: 'dec',
    type: { name: 'function', required: false },
    description: 'Function to calculate an step decrement of the value.',
    table: {
      type: { summary: 'function' },
      defaultValue: { summary: 'value => value - step' }
    }
  },
  stringify: {
    name: 'stringify',
    type: { name: 'function', required: false },
    description: 'Function for convert numeric value to a string value',
    table: {
      type: { summary: 'function' },
      defaultValue: { summary: 'value => String(value)' }
    }
  },
  parse: {
    name: 'parse',
    type: { name: 'function', required: false },
    description: 'Function for convert string value to a numeric value',
    table: {
      type: { summary: 'function' },
      defaultValue: { summary: 'value => Number(value)' }
    }
  }
}

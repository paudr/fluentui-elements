import baseArgTypes from '../../base/combo-element/arg-types'

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
  getItemsRate: {
    name: 'getItemsRate',
    type: { name: 'number', required: false },
    defaultValue: 0,
    control: {
      type: 'number'
    }
  },
  filterItems: {
    name: 'filterItems',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  accentInsensitive: {
    name: 'accentInsensitive',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  maxSelectedItems: {
    name: 'maxSelectedItems',
    type: { name: 'number', required: false },
    defaultValue: -1,
    control: {
      type: 'number'
    }
  },
  value: {
    name: 'value',
    type: { name: 'array', required: false },
    defaultValue: [],
    control: {
      type: 'object'
    }
  },
  loadingText: {
    name: 'loadingText',
    type: { name: 'string', required: false },
    defaultValue: 'Carregant',
    control: {
      type: 'text'
    }
  }
}

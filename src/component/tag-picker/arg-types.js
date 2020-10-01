import baseArgTypes from '../../base/combo-element/arg-types'

export default {
  ...baseArgTypes,
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Placeholder for the tag picker.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  getItemsRate: {
    name: 'getItemsRate',
    type: { name: 'number', required: false },
    defaultValue: 0,
    description:
      "Minimum amount of miliseconds between two consecutive item's request.",
    control: {
      type: 'number'
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 0 }
    }
  },
  filterItems: {
    name: 'filterItems',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'Whether the candidate items must to show alredy selected items or not.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  accentInsensitive: {
    name: 'accentInsensitive',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the tag picker ignore accent when match texts.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  maxSelectedItems: {
    name: 'maxSelectedItems',
    type: { name: 'number', required: false },
    defaultValue: -1,
    description:
      'The maximum amount of items that can be selected. -1 to disable limit.',
    control: {
      type: 'number'
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: -1 }
    }
  },
  value: {
    name: 'value',
    type: { name: 'array', required: false },
    description: 'Selected items.',
    defaultValue: [],
    control: {
      type: 'object'
    },
    table: {
      type: { summary: 'array' },
      defaultValue: { summary: [] }
    }
  },
  loadingText: {
    name: 'loadingText',
    type: { name: 'string', required: false },
    defaultValue: 'Carregant',
    description: 'The text to display while the results are loading.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Carregant' }
    }
  },
  getItems: {
    name: 'getItems',
    type: { name: 'function', required: false },
    description: 'Request for suggested items.',
    table: {
      type: { summary: 'function -> Promise()' }
    }
  }
}

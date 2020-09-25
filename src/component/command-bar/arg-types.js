export default {
  items: {
    name: 'items',
    type: { name: 'array', required: false },
    defaultValue: null,
    control: {
      type: 'object'
    }
  },
  overflowItems: {
    name: 'overflowItems',
    type: { name: 'array', required: false },
    defaultValue: null,
    control: {
      type: 'object'
    }
  },
  farItems: {
    name: 'farItems',
    type: { name: 'array', required: false },
    defaultValue: null,
    control: {
      type: 'object'
    }
  },
  autoUpdateOverflowIndex: {
    name: 'autoUpdateOverflowIndex',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  onResizeRate: {
    name: 'onResizeRate',
    type: { name: 'number', required: false },
    defaultValue: 250,
    control: {
      type: 'number',
      min: 0,
      step: 1
    }
  }
}

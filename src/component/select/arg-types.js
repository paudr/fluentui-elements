export default {
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
    defaultValue: null,
    control: {
      type: 'object'
    }
  },
  maxHeight: {
    name: 'maxHeight',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  markedIndex: {
    name: 'markedIndex',
    type: { name: 'number', required: false },
    defaultValue: -1,
    control: {
      type: 'number'
    }
  },
  highlightedIndex: {
    name: 'highlightedIndex',
    type: { name: 'number', required: false },
    defaultValue: -1,
    control: {
      type: 'number'
    }
  }
}

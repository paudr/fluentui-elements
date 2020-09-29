export default {
  options: {
    name: 'options',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Collection of options for this select.',
    control: {
      type: 'object'
    },
    table: {
      type: {
        summary: '[...objects]',
        detail: `[...{
  value (string),
  text (string),
  disabled (boolean)
}]`
      },
      defaultValue: { summary: '[]' }
    }
  },
  value: {
    name: 'value',
    type: { name: 'object', required: false },
    defaultValue: '',
    description: 'Key or Keys of the selected items.',
    control: {
      type: 'object'
    },
    table: {
      type: { summary: 'string | [...string]' },
      defaultValue: { summary: '' }
    }
  },
  maxHeight: {
    name: 'maxHeight',
    type: { name: 'string', required: false },
    description: 'Max height css attibute for this select.',
    defaultValue: '',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  markedIndex: {
    name: 'markedIndex',
    type: { name: 'number', required: false },
    defaultValue: -1,
    description: 'Index of the marked item.',
    control: {
      type: 'number'
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: -1 }
    }
  },
  highlightedIndex: {
    name: 'highlightedIndex',
    type: { name: 'number', required: false },
    defaultValue: -1,
    description: 'Indec of the highlighted item.',
    control: {
      type: 'number'
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: -1 }
    }
  }
}

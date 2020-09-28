export default {
  value: {
    name: 'value',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Current value of the choice group.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Descriptive label for the choice group.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  required: {
    name: 'required',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'If true, it specifies that an option must be selected in the choice group before submitting the form.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the choice group is disabled or not.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  options: {
    name: 'options',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'The options for the choice group.',
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
  inRow: {
    name: 'inRow',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Render the choice group in a row instead of a column.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

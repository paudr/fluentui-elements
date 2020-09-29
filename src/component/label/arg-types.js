export default {
  textContent: {
    name: 'textContent',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'The text content of the DOM Element',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Renders the label as disabled.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  required: {
    name: 'required',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the associated form field is required or not.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

export default {
  size: {
    name: 'size',
    type: { name: 'enum', required: false },
    defaultValue: '',
    description: 'The size of Spinner to render.',
    control: {
      type: 'select',
      options: ['', 'large', 'medium', 'small', 'xSmall']
    },
    table: {
      type: {
        summary: 'string (enum)',
        detail: '["", "large", "medium", "small", "xSmall"]'
      },
      defaultValue: { summary: '' }
    }
  },
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'The label to show next to the Spinner.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  }
}

export default {
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Label displayed above the associated form field.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  description: {
    name: 'description',
    type: { name: 'string', required: false },
    defaultValue: '',
    description:
      'Description displayed below the associated form field to provide additional details about what value to enter.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  invalid: {
    name: 'invalid',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Render field border with error color.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  errorMessage: {
    name: 'errorMessage',
    type: { name: 'string', required: false },
    defaultValue: '',
    description:
      'Static error message displayed below the associated form field.',
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
    description: 'Disabled state of the associated form field.',
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
  },
  borderless: {
    name: 'borderless',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether or not the associated form field is borderless.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  underlined: {
    name: 'underlined',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether or not the associated form field is underlined.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

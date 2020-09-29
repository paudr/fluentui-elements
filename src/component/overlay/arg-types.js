export default {
  dark: {
    name: 'dark',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether to use the dark-themed overlay.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  autoClose: {
    name: 'autoClose',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the overlay removes itself.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

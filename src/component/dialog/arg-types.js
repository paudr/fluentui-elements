export default {
  type: {
    name: 'type',
    type: { name: 'enum', required: false },
    defaultValue: 'normal',
    description: 'The type of Dialog to display.',
    control: {
      type: 'inline-radio',
      options: ['normal', 'largeHeader', 'close']
    },
    table: {
      type: {
        summary: 'string (enum)',
        detail: '["normal", "largeHeader", "close"]'
      },
      defaultValue: { summary: 'normal' }
    }
  },
  title: {
    name: 'title',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'The title text to display at the top of the dialog.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  text: {
    name: 'text',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'The text to display in the dialog.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  minWidth: {
    name: 'minWidth',
    type: { name: 'string', required: false },
    defaultValue: null,
    description:
      'Sets the minimum width of the dialog. It limits the width property to be not smaller than the value specified in min-width.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null }
    }
  },
  maxWidth: {
    name: 'maxWidth',
    type: { name: 'string', required: false },
    defaultValue: null,
    description:
      'Sets the maximum width for the dialog. It limits the width property to be larger than the value specified in max-width.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null }
    }
  },
  minHeight: {
    name: 'minHeight',
    type: { name: 'string', required: false },
    defaultValue: null,
    description:
      'Sets the minimum height of the dialog. It limits the height property to be not smaller than the value specified in min-height.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null }
    }
  },
  maxHeight: {
    name: 'maxHeight',
    type: { name: 'string', required: false },
    defaultValue: null,
    description:
      'Sets the maximum height for the dialog. It limits the height property to be larger than the value specified in max-height.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null }
    }
  },
  overlay: {
    name: 'overlay',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether overlay render or not.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  dark: {
    name: 'dark',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the overlay is dark themed.',
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
    description: 'Whether the dialog remove itself.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  isLightDismiss: {
    name: 'isLightDismiss',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'Whether the dialog can be light dismissed by clicking outside the dialog (on the overlay).',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

export default {
  type: {
    name: 'type',
    type: { name: 'enum', required: false },
    defaultValue: 'custom',
    description: 'Type of the panel.',
    control: {
      type: 'select',
      options: [
        'custom',
        'extraSmall',
        'small',
        'medium',
        'large',
        'extraLarge',
        'fluid'
      ]
    },
    table: {
      type: {
        summary: 'string (enum)',
        detail:
          '["custom", "extraSmall", "small", "medium", "large", "extraLarge", "fluid"]'
      },
      defaultValue: { summary: 'custom' }
    }
  },
  width: {
    name: 'width',
    type: { name: 'string', required: false },
    defaultValue: '',
    description:
      'Custom panel width, used only when type is set to PanelType.custom.',
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
      'Sets the minimum width of the panel. It limits the width property to be not smaller than the value specified in min-width.',
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
      'Sets the maximum width for the panel. It limits the width property to be larger than the value specified in max-width.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null }
    }
  },
  left: {
    name: 'left',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the panel renders in the left side or not.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  headerText: {
    name: 'headerText',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Header text for the panel.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: null }
    }
  },
  withoutCloseButton: {
    name: 'withoutCloseButton',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Has the close button visible.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
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
    description: 'Whether the panel remove itself.',
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
      'Whether the panel can be light dismissed by clicking outside the panel (on the overlay).',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

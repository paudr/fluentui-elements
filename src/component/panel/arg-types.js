export default {
  type: {
    name: 'type',
    type: { name: 'enum', required: false },
    defaultValue: 'custom',
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
    }
  },
  width: {
    name: 'width',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  minWidth: {
    name: 'minWidth',
    type: { name: 'string', required: false },
    defaultValue: null,
    control: {
      type: 'text'
    }
  },
  maxWidth: {
    name: 'maxWidth',
    type: { name: 'string', required: false },
    defaultValue: null,
    control: {
      type: 'text'
    }
  },
  left: {
    name: 'left',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  headerText: {
    name: 'headerText',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  withoutCloseButton: {
    name: 'withoutCloseButton',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  overlay: {
    name: 'overlay',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  dark: {
    name: 'dark',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  autoClose: {
    name: 'autoClose',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  isLightDismiss: {
    name: 'isLightDismiss',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  }
}

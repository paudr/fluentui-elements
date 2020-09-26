export default {
  type: {
    name: 'type',
    type: { name: 'enum', required: false },
    defaultValue: 'normal',
    control: {
      type: 'select',
      options: ['normal', 'largeHeader', 'close']
    }
  },
  title: {
    name: 'title',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  text: {
    name: 'text',
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
  minHeight: {
    name: 'minHeight',
    type: { name: 'string', required: false },
    defaultValue: null,
    control: {
      type: 'text'
    }
  },
  maxHeight: {
    name: 'maxHeight',
    type: { name: 'string', required: false },
    defaultValue: null,
    control: {
      type: 'text'
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

import iconCode from '../icon/code'

export default {
  type: {
    name: 'type',
    type: { name: 'enum', required: false },
    defaultValue: 'default',
    control: {
      type: 'select',
      options: ['default', 'compound', 'icon', 'action', 'command']
    }
  },
  primary: {
    name: 'primary',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
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
  secondaryText: {
    name: 'secondaryText',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  icon: {
    name: 'icon',
    type: { name: 'enum', required: false },
    defaultValue: null,
    control: {
      type: 'select',
      options: Object.keys(iconCode)
    }
  },
  href: {
    name: 'href',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  target: {
    name: 'target',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  checked: {
    name: 'checked',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  }
}

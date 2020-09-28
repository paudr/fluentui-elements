import iconCode from '../icon/code'

export default {
  type: {
    name: 'type',
    type: { name: 'enum', required: false },
    defaultValue: 'default',
    description: 'Type of button.',
    control: {
      type: 'select',
      options: ['default', 'compound', 'icon', 'action', 'command']
    },
    table: {
      type: {
        summary: 'string (enum)',
        detail: '["default", "compound", "icon", "action", "command"]'
      },
      defaultValue: { summary: 'default' }
    }
  },
  primary: {
    name: 'primary',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'Changes the visual presentation of the button to be emphasized.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  text: {
    name: 'text',
    type: { name: 'string', required: false },
    defaultValue: '',
    description:
      'Text to render button label. If text is supplied, it will override any string in button children. Other children components will be passed through after the text.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  secondaryText: {
    name: 'secondaryText',
    type: { name: 'string', required: false },
    defaultValue: '',
    description:
      'Description of the action this button takes. Only used for compound buttons.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  icon: {
    name: 'icon',
    type: { name: 'enum', required: false },
    defaultValue: '',
    description:
      'The name of the icon to use from the icon font. If string is empty, a placeholder icon will be rendered the same width as an icon.',
    control: {
      type: 'select',
      options: Object.keys(iconCode)
    },
    table: {
      type: { summary: 'string (iconName)' },
      defaultValue: { summary: '' }
    }
  },
  href: {
    name: 'href',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'If provided, this component will be rendered as an anchor.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  target: {
    name: 'target',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Target attribute of the anchor element.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  checked: {
    name: 'checked',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the button is checked.',
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
    description: 'Whether the button is disabled.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

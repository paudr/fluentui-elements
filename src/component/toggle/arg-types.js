export default {
  checked: {
    name: 'checked',
    type: { name: 'boolean', required: false },
    defaultValue: '',
    description: 'Checked state of the toggle.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'A label for the toggle.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  onText: {
    name: 'onText',
    type: { name: 'string', required: false },
    defaultValue: '',
    description:
      'Text to display when toggle is ON. Caution: when not providing on/off text user may get confused in differentiating the on/off states of the toggle.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  offText: {
    name: 'offText',
    type: { name: 'string', required: false },
    defaultValue: '',
    description:
      'Text to display when toggle is OFF. Caution: when not providing on/off text user may get confused in differentiating the on/off states of the toggle.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  inline: {
    name: 'inline',
    type: { name: 'boolean', required: false },
    defaultValue: '',
    description:
      'Whether the label (not the onText/offText) should be positioned inline with the toggle control.',
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
    defaultValue: '',
    description: 'Optional disabled flag.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

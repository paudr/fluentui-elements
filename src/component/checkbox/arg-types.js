export default {
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Label to display next to the checkbox.',
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
    description: 'Checked state. Mutually exclusive to "defaultChecked".',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  boxSide: {
    name: 'boxSide',
    type: { name: 'enum', required: false },
    defaultValue: 'start',
    description:
      'Allows you to set the checkbox to be at the before (start) or after (end) the label.',
    control: {
      type: 'inline-radio',
      options: ['start', 'end']
    },
    table: {
      type: {
        summary: 'string (enum)',
        detail: '["start", "end"]'
      },
      defaultValue: { summary: 'start' }
    }
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Disabled state of the checkbox.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  indeterminate: {
    name: 'indeterminate',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'Optional controlled indeterminate visual state for checkbox. Setting indeterminate state takes visual precedence over checked or defaultChecked props given but does not affect checked state. This should not be a toggleable state. On load the checkbox will receive indeterminate visual state and after the first user click it should be removed by your supplied onChange callback function exposing the true state of the checkbox.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  defaultChecked: {
    name: 'defaultChecked',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'Default checked state. Mutually exclusive to "checked". Use this if you want an uncontrolled component, and want the Checkbox instance to maintain its own state.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  valueTrue: {
    name: 'valueTrue',
    type: { name: 'object', required: false },
    description: 'Value of "value" property when Checkbox is checked',
    defaultValue: '1',
    control: {
      type: 'object'
    },
    table: {
      type: { summary: 'any' },
      defaultValue: { summary: '1' }
    }
  },
  valueFalse: {
    name: 'valueFalse',
    type: { name: 'object', required: false },
    defaultValue: '0',
    description: 'Value of "value" property when Checkbox is not checked',
    control: {
      type: 'object'
    },
    table: {
      type: { summary: 'any' },
      defaultValue: { summary: '0' }
    }
  }
}

export default {
  label: {
    name: 'label',
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
  boxSide: {
    name: 'boxSide',
    type: { name: 'enum', required: false },
    defaultValue: 'start',
    control: {
      type: 'inline-radio',
      options: ['start', 'end']
    }
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  indeterminate: {
    name: 'indeterminate',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  defaultChecked: {
    name: 'defaultChecked',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  valueTrue: {
    name: 'valueTrue',
    type: { name: 'boolean', required: false },
    defaultValue: 1,
    control: {
      type: 'object'
    }
  },
  valueFalse: {
    name: 'valueFalse',
    type: { name: 'object', required: false },
    defaultValue: 0,
    control: {
      type: 'object'
    }
  }
}

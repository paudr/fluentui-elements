export default {
  textContent: {
    name: 'textContent',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
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
  required: {
    name: 'required',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  }
}

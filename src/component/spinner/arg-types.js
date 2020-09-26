export default {
  type: {
    name: 'type',
    type: { name: 'enum', required: false },
    defaultValue: '',
    control: {
      type: 'select',
      options: ['', 'large', 'medium', 'small', 'xSmall']
    }
  },
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  }
}

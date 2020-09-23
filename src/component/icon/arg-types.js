import iconCode from './code'

export default {
  name: {
    name: 'name',
    type: { name: 'enum', required: false },
    defaultValue: '',
    control: {
      type: 'select',
      options: Object.keys(iconCode)
    }
  }
}

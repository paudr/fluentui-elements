import iconCode from './code'

export default {
  name: {
    name: 'name',
    type: { name: 'enum', required: false },
    defaultValue: '',
    description:
      'The name of the icon to use from the icon font. If string is empty, a placeholder icon will be rendered the same width as an icon.',
    control: {
      type: 'select',
      options: ['', ...Object.keys(iconCode)]
    },
    table: {
      type: { summary: 'string (iconName)' },
      defaultValue: { summary: '' }
    }
  }
}

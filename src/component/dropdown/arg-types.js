import baseArgTypes from '../../part/combo-element/arg-types'

export default {
  ...baseArgTypes,
  options: {
    name: 'options',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Collection of options for this dropdown.',
    control: {
      type: 'object'
    },
    table: {
      type: {
        summary: '[...objects]',
        detail: `[...{
  value (string),
  text (string),
  disabled (boolean)
}]`
      },
      defaultValue: { summary: '[]' }
    }
  },
  value: {
    name: 'value',
    type: { name: 'object', required: false },
    defaultValue: '',
    description: 'Key or Keys of the selected items.',
    control: {
      type: 'object'
    },
    table: {
      type: { summary: 'string | [...string]' },
      defaultValue: { summary: '' }
    }
  },
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Placeholder text rendered in the dropdown.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  readonly: {
    name: 'readonly',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'If true, the dropdown is readonly.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  multiple: {
    name: 'multiple',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the dropdown allow select more than one option.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

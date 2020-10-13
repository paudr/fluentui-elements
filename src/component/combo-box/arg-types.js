import baseArgTypes from '../../part/combo-element/arg-types'

export default {
  ...baseArgTypes,
  options: {
    name: 'options',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Collection of options for this combo box.',
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
    type: { name: 'string', required: false },
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
  readonly: {
    name: 'readonly',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'If true, the combo box is readonly.',
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
    description: 'Whether the combo box allow select more than one option.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  allowFreeform: {
    name: 'allowFreeform',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'Whether the combo box is free form, meaning that the user input is not bound to provided options.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  autoComplete: {
    name: 'autoComplete',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'Whether the combo box auto completes. As the user is inputing text, it will be suggested potential matches from the list of options. If the combo box is expanded, this will also scroll to the suggested option, and give it a selected style.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  accentInsensitive: {
    name: 'accentInsensitive',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the combo box ignore accent when match texts.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Placeholder text rendered in the combo box.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  }
}

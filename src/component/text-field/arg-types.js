import baseArgTypes from '../../base/input-element/arg-types'
import iconCode from '../icon/code'

export default {
  ...baseArgTypes,
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Placeholder text rendered in the text field.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  prefix: {
    name: 'prefix',
    type: { name: 'string', required: false },
    defaultValue: '',
    description:
      'Prefix displayed before the text field contents. This is not included in the value.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  sufix: {
    name: 'sufix',
    type: { name: 'string', required: false },
    defaultValue: '',
    description:
      'Suffix displayed after the text field contents. This is not included in the value.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  multiline: {
    name: 'multiline',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether or not the text field is a multiline text field.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  icon: {
    name: 'icon',
    type: { name: 'enum', required: false },
    defaultValue: null,
    description: 'The name of the icon to use from the icon font.',
    control: {
      type: 'select',
      options: Object.keys(iconCode)
    },
    table: {
      type: { summary: 'string (iconName)' },
      defaultValue: { summary: '' }
    }
  },
  readonly: {
    name: 'readonly',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'If true, the text field is readonly.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  maxlength: {
    name: 'maxlength',
    type: { name: 'number', required: false },
    defaultValue: null,
    description: 'Maximum length (number of characters) of value.',
    control: {
      type: 'number',
      min: 0,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: null }
    }
  },
  unresizable: {
    name: 'unresizable',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'For multiline text fields, whether or not the field is resizable.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  autoAdjustHeight: {
    name: 'autoAdjustHeight',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description:
      'For multiline text fields, whether or not to auto adjust text field height.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  value: {
    name: 'value',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Current value of the text field.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  }
}

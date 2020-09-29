import baseArgTypes from '../../base/input-element/arg-types'
import iconCode from '../icon/code'

export default {
  ...baseArgTypes,
  icon: {
    name: 'icon',
    type: { name: 'enum', required: false },
    defaultValue: 'Search',
    description: 'The name of the icon to use from the icon font.',
    control: {
      type: 'select',
      options: ['', ...Object.keys(iconCode)]
    },
    table: {
      type: { summary: 'string (iconName)' },
      defaultValue: { summary: 'Search' }
    }
  },
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    defaultValue: 'Search',
    description: 'Placeholder for the search box.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Search' }
    }
  },
  disableAnimation: {
    name: 'disableAnimation',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether or not to animate the SearchBox icon on focus.',
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
    description: 'The value of the text in the SearchBox.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Search' }
    }
  }
}

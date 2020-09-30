export default {
  selectedTab: {
    name: 'selectedTab',
    type: { name: 'number', required: false },
    defaultValue: -1,
    description: 'Index of the selected pivot item.',
    control: {
      type: 'number',
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: -1 }
    }
  },
  tabs: {
    name: 'tabs',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Tabs to render.',
    control: {
      type: 'object'
    },
    table: {
      type: {
        summary: '[...objects]',
        detail: `[...{
  text (string),
  value (string)
}]`
      },
      defaultValue: { summary: '[]' }
    }
  },
  large: {
    name: 'large',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether tabs are rendered large or not.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  tabStyle: {
    name: 'tabStyle',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether tabs are rendered as tabs or links.',
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
    defaultValue: null,
    description: 'Value of the selected tab.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  }
}

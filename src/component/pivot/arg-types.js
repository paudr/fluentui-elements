export default {
  selectedTab: {
    name: 'selectedTab',
    type: { name: 'number', required: false },
    defaultValue: -1,
    control: {
      type: 'number',
      step: 1
    }
  },
  tabs: {
    name: 'tabs',
    type: { name: 'array', required: false },
    defaultValue: '',
    control: {
      type: 'object'
    }
  },
  large: {
    name: 'large',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  tabStyle: {
    name: 'tabStyle',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  value: {
    name: 'value',
    type: { name: 'string', required: false },
    defaultValue: null,
    control: {
      type: 'text'
    }
  }
}

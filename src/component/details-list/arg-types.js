export default {
  columns: {
    name: 'columns',
    type: { name: 'array', required: false },
    defaultValue: '',
    control: {
      type: 'object'
    }
  },
  data: {
    name: 'data',
    type: { name: 'array', required: false },
    defaultValue: '',
    control: {
      type: 'object'
    }
  },
  groups: {
    name: 'groups',
    type: { name: 'array', required: false },
    defaultValue: '',
    control: {
      type: 'object'
    }
  },
  selectedIndices: {
    name: 'selectedIndices',
    type: { name: 'array', required: false },
    defaultValue: '',
    control: {
      type: 'object'
    }
  },
  auto: {
    name: 'auto',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  fullAuto: {
    name: 'fullAuto',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  compact: {
    name: 'compact',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  selection: {
    name: 'selection',
    type: { name: 'enum', required: false },
    defaultValue: '',
    control: {
      type: 'select',
      options: ['', 'multiple', 'simple', 'safe']
    }
  },
  collapsible: {
    name: 'collapsible',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  }
}

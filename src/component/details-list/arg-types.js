export default {
  columns: {
    name: 'columns',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Column defitions.',
    control: {
      type: 'object'
    },
    table: {
      type: {
        summary: '[...objects]',
        detail: `[...{
  title (string),
  align (left, center, right),
  key (string | number),
  width (string)
}]`
      },
      defaultValue: { summary: '[]' }
    }
  },
  data: {
    name: 'data',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'The items to render.',
    control: {
      type: 'object'
    },
    table: {
      type: { summary: '[...objects]' },
      defaultValue: { summary: '[]' }
    }
  },
  groups: {
    name: 'groups',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Grouping instructions.',
    control: {
      type: 'object'
    },
    table: {
      type: {
        summary: '[...objects]',
        detail: `[...{
  name (string),
  level (number),
  startIndex (number),
  count (number)
}]`
      },
      defaultValue: { summary: '[]' }
    }
  },
  selectedIndices: {
    name: 'selectedIndices',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Indices of the selected rows.',
    control: {
      type: 'object'
    },
    table: {
      type: { summary: '[...number]' },
      defaultValue: { summary: '[]' }
    }
  },
  auto: {
    name: 'auto',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the column width algorithm is set to auto or static.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  fullAuto: {
    name: 'fullAuto',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the table width algorithm is set to auto or full.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  compact: {
    name: 'compact',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether to render in compact mode.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  selection: {
    name: 'selection',
    type: { name: 'enum', required: false },
    defaultValue: '',
    description: 'Controls how/if the details list manages selection.',
    control: {
      type: 'select',
      options: ['', 'multiple', 'simple', 'safe']
    },
    table: {
      type: {
        summary: 'string (enum)',
        detail: '["", "multiple", "simple", "safe"]'
      },
      defaultValue: { summary: '' }
    }
  },
  collapsible: {
    name: 'collapsible',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the table groups are collapsible or not.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
}

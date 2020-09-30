export default {
  items: {
    name: 'items',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Items to render.',
    control: {
      type: 'object'
    },
    table: {
      type: {
        summary: '[...objects]',
        detail: `[...{
  type ('item', 'title', 'dividier'),
  text (string),
  value (any),
  icon (iconName),
  childs ([...options]),
  action (function)
}]`
      },
      defaultValue: { summary: '[]' }
    }
  },
  overflowItems: {
    name: 'overflowItems',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Default items to have in the overflow menu.',
    control: {
      type: 'object'
    },
    table: {
      type: {
        summary: '[...objects]',
        detail: `[...{
  type ('item', 'title', 'dividier'),
  text (string),
  value (any),
  icon (iconName),
  childs ([...options]),
  action (function)
}]`
      },
      defaultValue: { summary: '[]' }
    }
  },
  farItems: {
    name: 'farItems',
    type: { name: 'object', required: false },
    defaultValue: [],
    description: 'Items to render on the right side.',
    control: {
      type: 'object'
    },
    table: {
      type: {
        summary: '[...objects]',
        detail: `[...{
  type ('item', 'title', 'dividier'),
  text (string),
  value (any),
  icon (iconName),
  childs ([...options]),
  action (function)
}]`
      },
      defaultValue: { summary: '[]' }
    }
  },
  autoUpdateOverflowIndex: {
    name: 'autoUpdateOverflowIndex',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Whether the command bar move items to overdlow items or not.',
    control: {
      type: 'boolean'
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  onResizeRate: {
    name: 'onResizeRate',
    type: { name: 'number', required: false },
    defaultValue: 250,
    description: 'Miliseconds between two consecutive size checks.',
    control: {
      type: 'number',
      min: 0,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 250 }
    }
  }
}

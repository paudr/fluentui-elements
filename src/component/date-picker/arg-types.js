import baseArgTypes from '../../base/combo-element/arg-types'

export default {
  ...baseArgTypes,
  value: {
    name: 'value',
    type: { name: 'date', required: false },
    defaultValue: '',
    control: {
      type: 'date'
    }
  },
  today: {
    name: 'today',
    type: { name: 'date', required: false },
    defaultValue: '',
    control: {
      type: 'date'
    }
  },
  firstDayOfTheWeek: {
    name: 'firstDayOfTheWeek',
    type: { name: 'number', required: false },
    defaultValue: 1,
    control: {
      type: 'number',
      min: 0,
      max: 6,
      step: 1
    }
  },
  goToday: {
    name: 'goToday',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  days: {
    name: 'days',
    type: { name: 'array', required: false },
    defaultValue: ['d', 'l', 'm', 'x', 'j', 'v', 's'],
    control: {
      type: 'array',
      separator: ','
    }
  },
  months: {
    name: 'months',
    type: { name: 'array', required: false },
    defaultValue: [
      'Gener',
      'Febrer',
      'Març',
      'Abril',
      'Maig',
      'Juny',
      'Juliol',
      'Agost',
      'Setembre',
      'Octubre',
      'Novembre',
      'Desembre'
    ],
    control: {
      type: 'array',
      separator: ','
    }
  },
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  notWritable: {
    name: 'notWritable',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  }
}

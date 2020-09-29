export default {
  selected: {
    name: 'selected',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'Selected date in the Calendar, if any.',
    control: {
      type: 'date'
    },
    table: {
      type: { summary: 'date' },
      defaultValue: { summary: null }
    }
  },
  today: {
    name: 'today',
    type: { name: 'string', required: false },
    defaultValue: new Date().toString(),
    description:
      'Value of today. If null, current time in client machine will be used.',
    control: {
      type: 'date'
    },
    table: {
      type: { summary: 'date' },
      defaultValue: { summary: 'new Date()' }
    }
  },
  currentYear: {
    name: 'currentYear',
    type: { name: 'number', required: false },
    defaultValue: new Date().getFullYear(),
    description: 'The year shown in the calendar.',
    control: {
      type: 'number',
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 'today.getFullYear()' }
    }
  },
  currentMonth: {
    name: 'currentMonth',
    type: { name: 'number', required: false },
    defaultValue: new Date().getMonth(),
    description: 'The month shown in the calendar.',
    control: {
      type: 'number',
      min: 0,
      max: 11,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 'today.getMonth()' }
    }
  },
  firstDayOfTheWeek: {
    name: 'firstDayOfTheWeek',
    type: { name: 'number', required: false },
    defaultValue: 1,
    description: 'The first day of the week for your locale.',
    control: {
      type: 'number',
      min: 0,
      max: 6,
      step: 1
    },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 1 }
    }
  },
  goToday: {
    name: 'goToday',
    type: { name: 'string', required: false },
    defaultValue: '',
    description: 'The text in the "Go to today" link shown in the calendar.',
    control: {
      type: 'text'
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  days: {
    name: 'days',
    type: { name: 'array', required: false },
    defaultValue: ['d', 'l', 'm', 'x', 'j', 'v', 's'],
    description:
      'Localized strings to use in the calendar as a day identifiers.',
    control: {
      type: 'array',
      separator: ','
    },
    table: {
      type: { summary: '[...string]' },
      defaultValue: { summary: '["d", "l", "m", "x", "j", "v", "s"]' }
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
    description:
      'Localized strings to use in the calendar as a month identifiers.',
    control: {
      type: 'array',
      separator: ','
    },
    table: {
      type: { summary: '[...string]' },
      defaultValue: {
        summary:
          '["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"]'
      }
    }
  }
}

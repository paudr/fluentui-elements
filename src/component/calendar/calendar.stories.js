import { html } from 'lit-html'
import { withKnobs, number, text, date } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './calendar'

export default {
  title: 'Calendar',
  component: 'fluent-calendar',
  decorators: [withKnobs]
}

function myDateKnob (name, defaultValue) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

export const Sandbox = () => html`
  <fluent-calendar
    .today="${myDateKnob('today', new Date())}"
    .firstDayOfTheWeek="${number('firstDayOfTheWeek', 1, {
      min: 0,
      max: 6,
      step: 1
    })}"
    .goToday="${text('goToday', 'Avui')}"
    @change="${action('change')}"
    @change:currentMonth="${action('change:currentMonth')}"
    @change:currentView="${action('change:currentView')}"
  ></fluent-calendar>
`

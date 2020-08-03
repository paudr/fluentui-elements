import { html } from 'lit-html'
import {
  withKnobs,
  boolean,
  number,
  object,
  text
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './pivot'

export default {
  title: 'Pivot',
  component: 'fluent-pivot',
  decorators: [withKnobs]
}

const fullTabs = [
  { text: 'My files', value: 'files', icon: 'Emoji2', count: 42 },
  { text: 'Recent', value: 'recent', icon: 'Recent', count: 23 },
  { text: 'Shared with me', value: 'shared', icon: 'Ringer', count: 1 }
]

const onlyTextTabs = fullTabs.map(tab => ({
  text: tab.text,
  value: tab.value
}))

const withIconsTabs = fullTabs.map(tab => ({
  text: tab.text,
  value: tab.value,
  icon: tab.icon
}))

export const OnlyText = () => html`
  <fluent-pivot
    .tabs="${onlyTextTabs}"
    @change="${action('change')}"
  ></fluent-pivot>
`

export const WithIcons = () => html`
  <fluent-pivot
    .tabs="${withIconsTabs}"
    @change="${action('change')}"
  ></fluent-pivot>
`

export const FullTabs = () => html`
  <fluent-pivot
    .tabs="${fullTabs}"
    @change="${action('change')}"
  ></fluent-pivot>
`

export const Large = () => html`
  <fluent-pivot
    .tabs="${onlyTextTabs}"
    large
    @change="${action('change')}"
  ></fluent-pivot>
`

export const TabStyle = () => html`
  <fluent-pivot
    .tabs="${onlyTextTabs}"
    tabStyle
    @change="${action('change')}"
  ></fluent-pivot>
`

export const LargeTabStyle = () => html`
  <fluent-pivot
    .tabs="${onlyTextTabs}"
    large
    tabStyle
    @change="${action('change')}"
  ></fluent-pivot>
`

export const Sandbox = () => html`
  <fluent-pivot
    .tabs="${object('tabs', fullTabs)}"
    .large="${boolean('large', false)}"
    .tabStyle="${boolean('tabStyle', false)}"
    .selectedTab="${number('selectedTab', -1)}"
    .value="${text('value', '')}"
    @change="${action('change')}"
  ></fluent-pivot>
`

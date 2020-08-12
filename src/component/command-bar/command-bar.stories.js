import { html } from 'lit-html'
import { withKnobs, object, number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './command-bar'

export default {
  title: 'CommandBar',
  component: 'fluent-command-bar',
  decorators: [withKnobs]
}

const items = [
  {
    value: 'newItem',
    text: 'New',
    icon: 'Add',
    action: () => alert('New'),
    childs: [
      {
        type: 'title',
        text: 'Actions'
      },
      {
        value: 'upload',
        text: 'Upload',
        icon: 'Upload',
        iconColor: 'salmon'
      },
      {
        value: 'rename',
        text: 'Rename'
      },
      {
        value: 'share',
        text: 'Sharing',
        icon: 'Share',
        childs: [
          {
            value: 'sharetoemail',
            text: 'Share to Email',
            icon: 'Mail'
          },
          {
            value: 'sharetotwitter',
            text: 'Share to Twitter',
            icon: 'Share'
          }
        ]
      },
      {
        type: 'divider'
      },
      {
        type: 'title',
        text: 'Navigation'
      },
      {
        value: 'properties',
        text: 'Properties'
      },
      {
        value: 'print',
        text: 'Print',
        icon: 'Print'
      },
      {
        value: 'bing',
        text: 'Go to Bing'
      }
    ]
  },
  {
    value: 'upload',
    text: 'Upload',
    icon: 'Upload',
    action: () => alert('upload')
  },
  {
    value: 'share',
    text: 'Share',
    icon: 'Share',
    childs: [
      {
        value: 'sharetoemail',
        text: 'Share to Email',
        icon: 'Mail'
      },
      {
        value: 'sharetotwitter',
        text: 'Share to Twitter',
        icon: 'Share'
      }
    ]
  },
  {
    value: 'download',
    text: 'Download',
    icon: 'Download'
  }
]

const overflowItems = [
  {
    value: 'move',
    text: 'Move to...',
    icon: 'MoveToFolder'
  },
  {
    value: 'copy',
    text: 'Copy to...',
    icon: 'Copy'
  },
  {
    value: 'rename',
    text: 'Rename...',
    icon: 'Edit'
  }
]

const farItems = [
  { value: 'tiles', icon: 'Tiles' },
  { value: 'info', icon: 'Info' }
]

export const Sandbox = () => html`<fluent-command-bar
  .items="${object('items', items)}"
  .overflowItems="${object('overflowItems', overflowItems)}"
  .farItems="${object('farItems', farItems)}"
  .overflowedItemsIndex="${number('overflowedItemsIndex', -1)}"
  .autoUpdateOverflowedItemsIndex="${boolean(
    'overflowautoUpdateOverflowedItemsIndexedItemsIndex',
    false
  )}"
  @click="${action('click')}"
></fluent-command-bar>`

function onContainerWitdhChanged (event) {
  document.getElementById('container').style.width = event.detail.value
}

function onCalculateOverflowIndex () {
  const commandBar = document.querySelector('#container fluent-command-bar')
  commandBar.onResize()
}

export const CalculateOverflowIndex = () => html`
  <style>
    #container {
      position: relative;
      border: 1px solid black;
    }
  </style>
  <div id="container">
    <fluent-command-bar
      .items="${object('items', items)}"
      .overflowItems="${object('overflowItems', overflowItems)}"
      .farItems="${object('farItems', farItems)}"
      .overflowedItemsIndex="${number('overflowedItemsIndex', -1)}"
      .autoUpdateOverflowedItemsIndex="${boolean(
        'overflowautoUpdateOverflowedItemsIndexedItemsIndex',
        false
      )}"
      .onResizeRate="${number('overflowedItemsIndex', 250)}"
      @click="${action('click')}"
    ></fluent-command-bar>
    <fluent-text-field
      label="Container width"
      value="100%"
      @change="${onContainerWitdhChanged}"
    ></fluent-text-field>
    <fluent-button
      text="Calculate overflow index"
      @click="${onCalculateOverflowIndex}"
    ></fluent-button>
  </div>
`

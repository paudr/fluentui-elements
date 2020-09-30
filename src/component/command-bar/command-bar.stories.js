import { action } from '@storybook/addon-actions'
import argTypes from './arg-types'
import './command-bar'

export default {
  title: 'Commands, Menus & Navs/CommandBar',
  component: 'fluent-command-bar',
  argTypes
}

export function Standard (args) {
  const commandBar = document.createElement('FLUENT-COMMAND-BAR')

  commandBar.addEventListener('click', action('click'))

  for (const prop in args) {
    commandBar[prop] = args[prop]
  }

  return commandBar
}
Standard.args = {
  items: [
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
  ],
  overflowItems: [
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
  ],
  farItems: [
    { value: 'tiles', icon: 'Tiles' },
    { value: 'info', icon: 'Info' }
  ]
}

export function CalculateOverflowIndex (args) {
  const container = document.createElement('DIV')
  container.style.position = 'relative'
  container.style.border = '1px solid black'

  const commandBar = Standard(args)

  const textField = document.createElement('FLUENT-TEXT-FIELD')
  textField.label = 'Container width'
  textField.value = '100%'
  textField.addEventListener(
    'change',
    event => (container.style.width = event.detail.value)
  )

  const button = document.createElement('FLUENT-BUTTON')
  button.text = 'Calculate overflow index'
  button.addEventListener('click', event => commandBar.updateOverflowIndex())

  container.appendChild(commandBar)
  container.appendChild(textField)
  container.appendChild(button)

  return container
}
CalculateOverflowIndex.args = { ...Standard.args }

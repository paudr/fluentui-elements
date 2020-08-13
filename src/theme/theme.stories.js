import { html } from 'lit-html'
import '../index'

export default {
  title: 'Theme'
}

const commandBar = {
  items: [
    {
      value: 'newItem',
      text: 'New',
      icon: 'Add',
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
      icon: 'Upload'
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

const tabs = [
  { text: 'My files', value: 'files', icon: 'Emoji2', count: 42 },
  { text: 'Recent', value: 'recent', icon: 'Recent', count: 23 },
  { text: 'Shared with me', value: 'shared', icon: 'Ringer', count: 1 }
]

export const Normal = () => html`
  <style>
    #themeTest {
      margin: 0 25px;
      outline: 0;
    }

    .custom {
      --theme-darker: #5a0000;
      --theme-dark: #7a0000;
      --theme-dark-alt: #910000;
      --theme-primary: #a10000;
      --theme-secondary: #ac1515;
      --theme-tertiary: #c64f4f;
      --theme-light: #e39f9f;
      --theme-lighter: #f0caca;
      --theme-lighter-alt: #fbf1f1;
      --black: #000000;
      --neutral-dark: #201f1e;
      --neutral-primary: #323130;
      --neutral-primary-alt: #3b3a39;
      --neutral-secondary: #605e5c;
      --neutral-tertiary: #a19f9d;
      --neutral-tertiary-alt: #c8c6c4;
      --neutral-quaternary-alt: #e1dfdd;
      --neutral-light: #edebe9;
      --neutral-lighter-alt: #faf9f8;
      --neutral-lighter: #f3f2f1;
      --white: #ffffff;
    }
  </style>
  <fluent-toggle
    label="Custom theme"
    @change="${event => {
      if (event.detail) {
        document.getElementById('themeTest').className = 'custom'
      } else {
        document.getElementById('themeTest').className = ''
      }
    }}"
  ></fluent-toggle>
  <div
    id="themeTest"
    tabindex="0"
    @keydown="${event => event.stopPropagation()}"
  >
    <fluent-command-bar
      .items="${commandBar.items}"
      .overflowItems="${commandBar.overflowItems}"
      .farItems="${commandBar.farItems}"
    ></fluent-command-bar>
    <fluent-text-field required label="Name"></fluent-text-field>
    <fluent-pivot .tabs="${tabs}"></fluent-pivot>
    <fluent-date-picker label="Date Picker" goToday="Avui"></fluent-date-picker>
    <p><fluent-checkbox label="CheckBox" indeterminate></fluent-checkbox></p>
  </div>
`

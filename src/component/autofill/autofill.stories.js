import { html } from 'lit-html'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './autofill'

export default {
  title: 'Autofill',
  component: 'fluent-autofill',
  decorators: [withKnobs]
}

function makeSuggestion () {
  const autofill = document.getElementById('suggest')
  const textField = document.getElementById('suggestion')
  autofill.suggest(textField.value)
}

export const Suggest = () =>
  html`
    <style>
      div {
        display: grid;
        grid-template-areas: 'autofill autofill' 'textField button';
        outline: 0;
      }

      #suggest {
        border: 1px solid black;
        grid-area: autofill;
      }

      #suggestion {
        grid-area: textField;
      }
      fluent-button[text='suggest'] {
        grid-area: button;
      }
    </style>
    <div tabindex="0" @keydown="${event => event.stopPropagation()}">
      <fluent-autofill
        id="suggest"
        autofill
        accentInsensitive
      ></fluent-autofill>
      <fluent-text-field id="suggestion"></fluent-text-field>
      <fluent-button text="suggest" @click="${makeSuggestion}"></fluent-button>
    </div>
  `

export const Sandbox = () =>
  html`
    <style>
      .container {
        border: 1px solid black;
        padding: 0px;
      }

      .container span {
        background-color: rgba(146, 255, 178, 0.4);
      }

      .container fluent-autofill {
        background-color: rgba(255, 146, 178, 0.4);
      }
    </style>
    <div
      class="container"
      tabindex="0"
      @keydown="${event => event.stopPropagation()}"
      style="outline: 0"
    >
      <span>Text: </span>
      <fluent-autofill
        .autofill="${boolean('autofill', false)}"
        .value="${text('value', '')}"
        .placeholder="${text('placeholder', '')}"
        .suggestedValue="${text('suggestedValue', '')}"
        .accentInsensitive="${boolean('accentInsensitive', false)}"
        .inline="${boolean('inline', false)}"
        .readOnly="${boolean('readOnly', false)}"
        .disabled="${boolean('disabled', false)}"
        @input="${action('input')}"
        @change="${action('change')}"
        @keydown="${action('keydown')}"
      ></fluent-autofill>
    </div>
  `
